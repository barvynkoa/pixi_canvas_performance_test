import $ from "jquery";
import {BunnyMarkMultipleCanvases} from "./BunnyMarkMultipleCanvases";
import {BunnyMarkOneCanvases} from "./BunnyMarkOneCanvases";

// Window ready
$(() => {
    let bunnyCount = 5000;
    let hello = $("#stage0");
    if (hello.length) {
        new BunnyMarkMultipleCanvases('#frame','#stage0').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage1').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage2').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage3').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage4').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage5').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage6').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage7').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage8').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage9').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage10').ready(bunnyCount);
        new BunnyMarkMultipleCanvases('#frame','#stage11').ready(bunnyCount);


        console.log("BunnyMarkMultipleCanvases");
    }
    else {
        let app = new BunnyMarkOneCanvases('#frame');
        app.ready(bunnyCount);

        console.log("BunnyMarkOneCanvases");
    }

});