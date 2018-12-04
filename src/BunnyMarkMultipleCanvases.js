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
}