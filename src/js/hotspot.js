export default class Hotspot {
    hotspotItem;
    triggerElm;
    contentElm;
    targetElm;
    mobileNavElm;
    mobileDataElm;

    constructor (targetElm, config, mobileViewWrapper) {
        this.targetElm = targetElm;
        this.hotspotItem = this.createHotspotItem(config.position);
        this.triggerElm = this.createTrigger();
        this.contentElm = this.createContent(config);
        this.mobileNavElm = mobileViewWrapper.querySelector('.image-hotspot__mobile-nav');
        this.mobileDataElm = mobileViewWrapper.querySelector('.image-hotspot__mobile-data');

        //
        const mobileNavItem = this.createMobileNavItem();

        // append items
        this.hotspotItem.appendChild(this.triggerElm);
        this.hotspotItem.appendChild(this.contentElm);
        this.mobileNavElm.appendChild(mobileNavItem);

        // add event-handler to trigger
        this.triggerElm.addEventListener('click', this.toggleHotspot);
        mobileNavItem.addEventListener('click', (event) => this.onMobileNavClick(event.target, config.content));

        // add hotspot item into DOM
        targetElm.appendChild(this.hotspotItem);
    }

    createHotspotItem({ top, left }) {
        const elm = document.createElement('div');
        elm.classList.add('image-hotspot__item');
        elm.style.top = top;
        elm.style.left = left;

        return elm;
    }

    createTrigger() {
        const elm = document.createElement('button');
        elm.classList.add('image-hotspot__trigger');
        elm.innerHTML = `
            <div class="image-hotspot__trigger-pulse image-hotspot__trigger-pulse--1"></div>
            <div class="image-hotspot__trigger-pulse image-hotspot__trigger-pulse--2"></div>`;
        
        return elm;
    }

    createSpacer = (direction, distance) => {
        const elm = document.createElement('div');
        const directionClass = this.isHorizontal(direction) ? 'horizontal' : 'vertical';

        elm.classList.add('image-hotspot__spacer');
        elm.classList.add('image-hotspot__spacer--' + directionClass);
        elm.style.setProperty('--distance', distance);

        //
        if(this.isHorizontal(direction)) {
            elm.classList.add('image-hotspot__spacer');
        }

        //
        if(direction.match(/(up|down)\-/g)) {
            elm.style.height = distance;
        } else {
            elm.style.width = distance;
        }

        //
        const direction2 = direction.match(/\-(left|right|up|down)/gi);

        if(direction2) {
            elm.classList.add('image-hotspot__spacer-' + direction2[0] + '-border');
        }

        return elm;
    }

    createContent = ({ content, direction = 'down-left', distance, contentWidth }) => {
        const spacer = this.createSpacer(direction, distance);
        const contentTextElm = this.createContentText(content, contentWidth, direction);
        const elm = document.createElement('div');
        elm.classList.add('image-hotspot__content');

        //
        this.setPosition(elm, direction);
        elm.append(contentTextElm);

        if(this.isHorizontal(direction)) {
            elm.classList.add('image-hotspot__content--horizontal');
        }

        // include spacer based on first-direction
        if(direction.match(/(down|right)\-/g)) {
            elm.prepend(spacer);
        } else {
            elm.append(spacer);
        }

        return elm;
    }

    createContentText = (content, contentWidth, direction) => {
        const elm = document.createElement('div');
        elm.classList.add('image-hotspot__content-text');
        elm.innerHTML = content;

        if(contentWidth) {
            elm.style.setProperty('--content-width', contentWidth);
        }

        this.setContentBorder(elm, direction);

        return elm;
    }

    setContentBorder(elm, direction) {
        //
        const direction1 = direction.match(/(left|right|up|down)\-/gi);
        const borderMap = {
            'left-': 'right',
            'right-': 'left',
            'up-': 'down',
            'down-': 'up'
        };

        if(direction1) {
            elm.classList.add('image-hotspot__content-text--' + borderMap[direction1[0]]);
        }
    }

    setPosition(elm, direction) {
        switch(direction) {
            case 'up-left':
                elm.style.bottom = '30px';
                elm.style.left = '14px';
                break;

            case 'up-right':
                elm.style.bottom = '30px';
                elm.style.right = '14px';
                break;
            
            case 'down-left':
                elm.style.left = '14px';
                elm.style.top = '30px';
                break;
            
            case 'down-right':
                elm.style.right = '14px';
                elm.style.top = '30px';
                break;
            
            case 'left-up':
                elm.style.right = '30px';
                elm.style.top = '14px';
                break;
            
            case 'left-down':
                elm.style.right = '30px';
                elm.style.bottom = '14px';
                break;
            
            case 'right-up':
                elm.style.left = '30px';
                elm.style.top = '14px';
                break;

            case 'right-down':
                elm.style.left = '30px';
                elm.style.bottom = '14px';
                break;
        }
    }

    toggleHotspot = (event) => {
        this.targetElm.querySelectorAll('.image-hotspot__item').forEach(item => {

            // toggle the current item
            if(item === this.hotspotItem) {
                if(item.classList.contains('image-hotspot__item--active')) {
                    // close self
                    item.classList.add('image-hotspot__item--closing');

                    setTimeout(() => {
                        item.classList.remove('image-hotspot__item--closing');
                        item.classList.remove('image-hotspot__item--active');
                    }, 800);
                } else {
                    // open self
                    item.classList.add('image-hotspot__item--active');
                }

                return;
            }

            // hide other items
            item.classList.add('image-hotspot__item--closing');

            setTimeout(() => {
                item.classList.remove('image-hotspot__item--closing');
                item.classList.remove('image-hotspot__item--active');
            }, 800);
        });
    }

    createMobileNavItem() {
        const elm = document.createElement('button');
        elm.classList.add('image-hotspot__mobile-nav-item');
        return elm;
    }

    onMobileNavClick(elm, content) {
        this.mobileDataElm.innerHTML = content;
        let itemIndex;

        //
        const allNavItems = this.mobileNavElm.querySelectorAll('.image-hotspot__mobile-nav-item');
        allNavItems.forEach((item, index) => {
            if(item === elm) {
                itemIndex = index;
                item.classList.add('image-hotspot__mobile-nav-item--active');
            } else {
                item.classList.remove('image-hotspot__mobile-nav-item--active');
            }
        });

        //
        const allHotspotItems = this.targetElm.querySelectorAll('.image-hotspot__item');
        allHotspotItems.forEach((item, index) => {
            if(index === itemIndex) {
                item.classList.add('image-hotspot__item--active');
            } else {
                item.classList.remove('image-hotspot__item--active');
            }
        });
    }

    isHorizontal(direction) {
        return direction.match(/(left|right)\-/g);
    }

    isVertical(direction) {
        return direction.match(/(up|down)\-/g);
    }
}