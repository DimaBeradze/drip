import { gsap } from 'gsap';
import { EventEmitter } from 'events';
import { GridItem } from './gridItem';
import { getRandomNumber } from './utils';

import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

// initialize Splitting
const splitting = Splitting();


// title behind the grid
const title = document.querySelector('.content__title');
// Splitting will run on the inner spans
// get the chars
const titleChars = [...title.querySelectorAll('.char')];


export class Grid extends EventEmitter {
    constructor(el) {
        super();
        this.DOM = {el: el};

        this.gridItems = [];
        this.DOM.items = [...this.DOM.el.querySelectorAll('.grid__item')];
        this.DOM.items.forEach(item => {
            this.gridItems.push(new GridItem(item));
        });
        
        this.showItems();
        this.initEvents();
    }
    // Initial animation to scale up and fade in the items
    showItems() {
        gsap
        .timeline()
        .addLabel('start', 0)
        .set(this.DOM.items, {scale: 1.5, opacity: 0}, 0)
        .to(this.DOM.items, {
            duration: 1.2,
            ease: 'expo',
            scale: 1,
            stagger: {amount: 0.4, grid: 'auto', from: 'center'}
        }, 'start')
        .to(this.DOM.items, {
            duration: 1.2,
            ease: 'power1',
            opacity: 1,
            stagger: {amount: 0.4, grid: 'auto', from: 'center'}
        }, 'start');
    }
    initEvents() {
        for(const item of this.gridItems) {
            item.DOM.image.addEventListener('mouseenter', () => {
                item.onMouseEnter();
                this.emit('mouseEnterItem', item.title);
            });
            
            item.DOM.image.addEventListener('mouseleave', () => {
                item.onMouseLeave();
                this.emit('mouseLeaveItem');
            });
        }
    }
}