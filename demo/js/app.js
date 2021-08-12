import ImageHotspots from "../../index.js";

const hotspotElm = document.querySelector('.image-hotspot');
// const data = [
//     {
//       "name": "touch-control",
//       "position": {
//         "top": "55%",
//         "left": "41%"
//       },
//       "direction": "bottom-left",
//       "distance": "100px",
//       "content": "<h2>Touch controls</h2><p>lorem impsum touch controls</p>",
//       "contentWidth": "120px"
//     },
//     {
//       "name": "head-bar",
//       "position": {
//         "top": "6%",
//         "left": "72%"
//       },
//       "direction": "bottom-left",
//       "distance": "100px",
//       "content": "<h2>Head Bar</h2><p>lorem impsum touch controls</p>",
//       "contentWidth": "120px"
//     },
//     {
//       "name": "usb-port",
//       "position": {
//         "top": "78%",
//         "left": "67%"
//       },
//       "direction": "bottom-left",
//       "distance": "100px",
//       "content": "<h2>USB Port</h2><p>lorem impsum touch controls</p>",
//       "contentWidth": "120px"
//     }
//   ];
// hotspotElm.dataset.hotspots = JSON.stringify(data);
const hotspotInstance = new ImageHotspots(hotspotElm);

export {};