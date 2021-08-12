import Hotspot from './src/js/hotspot.js';

export default class ImageHotspots {
    hotspots = [];
    targetElm;

    constructor (hotspotElm) {
        this.targetElm = hotspotElm;

        try {
            this.hotspots = JSON.parse(hotspotElm.dataset.hotspots);
        } catch (err) {
            this.hotspots = [];
            console.error('Hotspot: Could not find hotspot configuration');
        }

        // init each hotspot
        this.hotspots.map(hotspot => new Hotspot(this.targetElm, hotspot));
    }
}
