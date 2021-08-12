import ImageHotspots from "../../index.js";

const hotspotElm = document.querySelector('.image-hotspot');
// const data = [
//     {
//        "name": "touch-control",
//        "position": {
//           "top": "55%",
//           "left": "41%"
//        },
//        "direction": "up-right",
//        "distance": "100px",
//        "content": "<h2>Touch controls</h2><p>lorem impsum touch controls</p>"
//     },
//     {
//        "name": "head-bar",
//        "position": {
//           "top": "6%",
//           "left": "72%"
//        },
//        "direction": "down-left",
//        "distance": "100px",
//        "content": "<h2>Head Bar</h2><p>lorem impsum touch controls</p>",
//        "contentWidth": "220px"
//     },
//     {
//        "name": "usb-port",
//        "position": {
//           "top": "78%",
//           "left": "67%"
//        },
//        "direction": "left-down",
//        "distance": "400px",
//        "content": "<h2>USB Port</h2><p>lorem impsum touch controls</p>",
//        "contentWidth": "120px"
//     },
//     {
//        "name": "ear Cups",
//        "position": {
//           "top": "48%",
//           "left": "53%"
//        },
//        "direction": "right-down",
//        "distance": "100px",
//        "content": "<h2>Ear Cups</h2><p>lorem impsum touch controls</p>",
//        "contentWidth": "120px"
//     }
//  ];
// hotspotElm.dataset.hotspots = JSON.stringify(data);
const hotspotInstance = new ImageHotspots(hotspotElm);

export {};