import * as $ from "jquery";
import * as Stats from "stats.js";
import {Resources} from "./Resources";
import {Bunny} from "./Bunny";

export class BunnyMark {
    constructor(domElementSelector) {
        /**
         * Collection of currently running bunnies
         * @type Array<Bunny>
         */
        this.bunnies = [];

        /**
         * Containing frame element
         */
        this.domElement = $(domElementSelector);

        /**
         * Stage bounds
         */
        this.bounds = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };

        //this.boundList = [];

        /**
         * Number of bunnies on the stage
         */
        this.count = 0;

        /**
         * Render for the stage
         */
        this.renderer = null;

        /**
         * Container for the bunnies
         */
        this.stage = null;

        /**
         * The stats UI for showing framerate
         */
        this.stats = null;

        /**
         * Collection of bunny textures
         */
        this.textures = null;

        /**
         * Container for the counter
         */
        this.counter = null;
    }

    getStage(name) {
        return $(name);
    }

    ready(startBunnyCount) {
        // Default bunnies to 100000
        if (typeof startBunnyCount === 'undefined') {
            startBunnyCount = 10000;
        }

        let $stage = this.getStage('#stage');
        let view = $stage.get(0);

        this.bounds.right = $stage.width();
        this.bounds.bottom = $stage.height();

        let options = {
            backgroundColor: 0xFFFFFF,
            view: view
        };

        if (PIXI.autoDetectRenderer) {
            this.renderer = PIXI.autoDetectRenderer(
                this.bounds.right,
                this.bounds.bottom,
                options
            );

            // Add fewer bunnies for the canvas renderer
            if (this.renderer instanceof PIXI.CanvasRenderer) {
                this.amount = 5;
                this.renderer.context.mozImageSmoothingEnabled = false;
                this.renderer.context.webkitImageSmoothingEnabled = false;
            }
        }
        // Support for v5
        else if (PIXI.Renderer) {
            this.renderer = new PIXI.Renderer(
                this.bounds.right,
                this.bounds.bottom,
                options
            );
        }

        // The current stage
        this.stage = new PIXI.Container();

        // Create the stats element
        this.stats = new Stats();
        this.stats.domElement.id = "stats";
        this.domElement.append(this.stats.domElement);

        // Get bunny textures
        this.textures = Resources.map(function (a) {
            return PIXI.Texture.fromImage(a, null, 1);
        });

        let gl = this.renderer.gl;
        this.textures.length = Math.min(
            gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
            this.textures.length
        );

        // Create the sounder
        this.counter = $("#counter");
        this.counter.html(this.count + " BUNNIES");

        if (startBunnyCount > 0) {
            this.addBunnies(startBunnyCount);
            //this.addBunniesTo12rects(startBunnyCount);
        }

        // Handle window resizes
        $(window).on(
            'resize orientationchange',
            this.resize.bind(this)
        );

        this.resize();
        this.startUpdate();
    }

    addBunnies(num) {
        for (let i = 0; i < num; i++) {
            let texture = this.textures[this.count % this.textures.length];
            let bunny = new Bunny(texture, this.bounds);
            bunny.position.x = (this.count % 2) * 1400;
            this.bunnies.push(bunny);
            this.stage.addChild(bunny);
            this.count++;
        }
        this.counter.html(this.count + " BUNNIES");
    }

    addBunniesTo12rects(num) {
        for (let k = 0; k < 4; k++) {
            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < num; i++) {
                    let texture = this.textures[this.count % this.textures.length];
                    let bunny = new Bunny(texture, this.boundList[j+3*k]);
                    bunny.position.x = (this.count % 2) * 1400;
                    this.bunnies.push(bunny);
                    this.stage.addChild(bunny);
                    this.count++;
                }
            }
        }


        this.counter.html(this.count + " BUNNIES");
    }

    startUpdate() {
        requestAnimationFrame(() => {
            this.update();
        });
    }

    resize() {
        /*let width = this.domElement.width();
        let height = this.domElement.height();
        this.bounds.right = width;
        this.bounds.bottom = height;
        this.renderer.resize(width, height);*/
    }

    reset() {
        this.stage.removeChildren();
        this.count = 0;
        for (let i = this.bunnies.length - 1; i >= 0; i--) {
            let bunny = this.bunnies[i];
            bunny.destroy();
        }
        this.bunnies.length = 0;
    }

    update() {
        this.stats.begin();

        for (let i = 0; i < this.bunnies.length; i++) {
            this.bunnies[i].update();
        }

        this.renderer.render(this.stage);
        this.startUpdate();

        this.stats.end();
    }
}