import Hotspot from './src/js/hotspot.js';

export default class ImageHotspots {
    hotspots = [];
    targetElm;
    mobileDataWrapper;
    mobileMatchMedia = window.matchMedia("(max-width: 991px)");

    constructor (hotspotElm) {
        this.targetElm = hotspotElm;

        try {
            this.hotspots = JSON.parse(hotspotElm.dataset.hotspots);
        } catch (err) {
            this.hotspots = [];
            console.error('Hotspot: Could not find hotspot configuration');
        }

        // add mobile data wrapper
        this.mobileDataWrapper = this.createMobileDataWrapper();
        hotspotElm.insertAdjacentElement('afterend', this.mobileDataWrapper);

        // init each hotspot
        this.hotspots.map(hotspot => new Hotspot(this.targetElm, hotspot, this.mobileDataWrapper));
        
        // init mobile view on window-resize
        this.mobileMatchMedia.addEventListener('change', this.initMobileView);

        // init mobile view on page load
        if(this.mobileMatchMedia.matches) {
            this.initMobileView();
        }
    }

    createMobileDataWrapper() {
        const elm = document.createElement('div');
        elm.classList.add('image-hotspot__mobile-wrapper');
        elm.innerHTML = `<div class="image-hotspot__mobile-nav"></div><div class="image-hotspot__mobile-data"></div>`;

        return elm;
    }

    initMobileView = (event) => {
        const firstNavItem = this.mobileDataWrapper.querySelector('.image-hotspot__mobile-nav-item');

        if(!event) {
            firstNavItem.click();
            return;
        }

        if(event.matches) {
            firstNavItem.click();
        } else {
            // de-active the active hotspot when switching to bigger screen
            const activeHotspotItem = this.targetElm.querySelector('.image-hotspot__item--active');
            activeHotspotItem.classList.remove('image-hotspot__item--active');
        }
    }
}
