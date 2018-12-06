import $ from "jquery";
import device from 'current-device'
import {BunnyMarkMultipleCanvases} from "./BunnyMarkMultipleCanvases";
import {BunnyMarkOneCanvases} from "./BunnyMarkOneCanvases";

// Window ready
$(() => {
    let bunnyCount = 5000;
    if (device.mobile() || device.tablet()) {
        bunnyCount = 1000;
    }


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


    console.log("device.portrait() === %s", device.portrait());
    console.log("device.landscape() === %s", device.landscape());
    console.log("device.mobile() === %s", device.mobile());
    console.log("device.tablet() === %s", device.tablet());
    console.log("device.ipad() === %s", device.ipad());
    console.log("device.ipod() === %s", device.ipod());
    console.log("device.iphone() === %s", device.iphone());
    console.log("device.android() === %s", device.android());
    console.log("device.androidTablet() === %s", device.androidTablet());
    console.log("device.blackberryTablet() === %s", device.blackberryTablet());
    console.log("device.fxos() === %s", device.fxos());
    console.log("device.fxosPhone() === %s", device.fxosPhone());
    console.log("device.fxosTablet() === %s", device.fxosTablet());
    console.log("device.meego() === %s", device.meego());
    console.log("device.television() === %s", device.television());
    device.onChangeOrientation(function (newOrientation) {
        console.log("New orientation is " + newOrientation);
    });

});