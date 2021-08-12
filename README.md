# image-hotspot
Image hotspot feature for showing details about specific feature of product

## Installation
`npm i image-hotspot`

## HTML
```HTML
<div class="image-hotspot" data-hotspots='[...]'>
    <img src="./demo/assets/product.jpeg" alt="Product image">
</div>
```

```javascript
import ImageHotspots from 'image-hotspot';

/*
// if using plain JS, import this way
import ImageHotspots from "./node_modules/image-hotspot/index.js";
*/

const hotspotElm = document.querySelector('.image-hotspot');
const hotspotInstance = new ImageHotspots(hotspotElm);
```

## Hotspot Data
Hotspot data is is array of below type of objects
```javascript
{
    "name": "touch-control",
    "position": {
        "top": "55%",
        "left": "41%"
    },
    "direction": "up-right",
    "distance": "100px",
    "content": "<h2>Touch controls</h2><p>lorem impsum touch controls</p>"
}
```

## Position
Position is an object with `top` and `left` values in percentage format. This value is used to set the hotspot in image and `top` & `left` are used to set the offset of it from image.

## Directions:

| Direction Name  | Value       |
| ------------- |:-------------:|
| Up left       |  up-left      |
| Up right      |  up-right     |
| Down left     |  down-left    |
| Down right    |  down-right   |
| Left Up       |  left-up      |
| Left down     |  left-down    |
| Right Up      |  right-up     |
| Right down    |  right-down   |

## Distance
Distance is value in pixel and used to set the gap between hotspot and the content for animation while opening it.

## Content
Content is HTML string value.

