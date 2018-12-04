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
        console.log($stage);
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

        console.log(this.boundList);
    }

    addBunnies(num) {
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
}