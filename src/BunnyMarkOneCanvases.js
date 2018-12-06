import * as $ from "jquery";
import {BunnyMark} from "./BunnyMark";
import {Bunny} from "./Bunny";

export class BunnyMarkOneCanvases extends BunnyMark {
    constructor(domElementSelector) {
        super(domElementSelector);

        this.boundList = [];
    }

    ready(startBunnyCount) {
        let $stage = $('#stage')[0];

        let w = Math.max(window.screen.width, window.screen.height);
        let h = Math.min(window.screen.width, window.screen.height);

        if (device.android()) {
            h = Math.min(window.innerWidth, window.innerHeight);
        }

        $stage.width = w > 1400 ? 1400 : w;
        $stage.height = h > 800 ? 800 : h;

        let width = $stage.width;
        let height = $stage.height;

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                this.boundList.push({
                    left: width/4*i,
                    top: height/3*j,
                    right: width/4*(i+1),
                    bottom: height/3*(j+1)
                });
            }
        }

        super.ready(startBunnyCount);
    }

    addBunnies(num) {
        for (let k = 0; k < 4; k++) {
            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < num; i++) {
                    let texture = this.textures[this.count % this.textures.length];
                    let bunny = new Bunny(texture, this.boundList[j+3*k]);
                    bunny.position.x = (this.count % 2) * this.width;
                    this.bunnies.push(bunny);
                    this.stage.addChild(bunny);
                    this.count++;
                }
            }
        }


        this.counter.html(this.count + " BUNNIES");
    }
}