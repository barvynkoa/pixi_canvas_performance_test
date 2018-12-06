import * as $ from "jquery";
import {BunnyMark} from "./BunnyMark";

export class BunnyMarkMultipleCanvases extends BunnyMark {
    constructor(domElementSelector, stageElementSelector) {
        super(domElementSelector);

        this.stageElementSelector = stageElementSelector;
    }

    getStage(name) {
        return $(this.stageElementSelector);
    }

    setBounds() {
        let $stage = $(this.stageElementSelector)[0];

        let w = Math.max(window.screen.width, window.screen.height);
        let h = Math.min(window.screen.width, window.screen.height);

        if (device.android()) {
            h = Math.min(window.innerWidth, window.innerHeight);
        }

        $stage.width = (w - 10) / 4 > 350 ? 350 : (w - 10) / 4;
        $stage.height = h / 3 > 266 ? 266 : h / 3;

        this.bounds.right = $stage.width;
        this.bounds.bottom = $stage.height;
    }
}