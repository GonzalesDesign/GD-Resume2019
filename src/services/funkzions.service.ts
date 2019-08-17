/***********************************************************
 * Project: R.Lloyd Gonzales Resume Website
 * URL: RLGonzales.com
 * Contact: rolandolloyd@gmail.com
 * Copyright © 2019 GonzalesDesign
 * Version: 030119
 * Note: Miscellaneous functions
 ***********************************************************/

import { Injectable } from '@angular/core';
import { TweenMax, Power2, Elastic, ScrollToPlugin, CSSPlugin } from 'gsap/all';

@Injectable({
    providedIn: 'root'
})
export class FunkzionsService {

    public plugins = [CSSPlugin, ScrollToPlugin];

    constructor() {}

    /***********************************************
        fOpenXLinks: open external links
    ************************************************/
    public fOpenXLinks(link) {
        window.open(link, 'xWindow', '', true);
        console.log('link: ', link);
    }

    /***********************************************
        fAnimYPos: animate to y position
    ************************************************/
    public fAnimYPos(e, tym, yPos) {
        // const animY = TweenMax.to(e, tym, {css: {top: yPos, backgroundColor: '#FF0000'}, ease: Power2.easeOut});
        // const animY = TweenMax.to('#box1', 2, {css: {top: '70px', backgroundColor: '#FF0000'}, ease: Power2.easeOut});
        const animY = TweenMax.to(e, tym, {y: yPos, ease: Elastic.easeOut, onComplete: function() {
            console.log('this: ', this);
            // return animY;
        }});
        console.log('yPos: ', yPos);
        // return animY;
        // TweenMax.to(e, tym, {y: yPos, ease: Elastic});
    }
    /***********************************************
        fAnimXPos: animate to x position
    ************************************************/
    public fAnimXPos(e, tym, xPos) {
        TweenMax.to(e, tym, {x: xPos, ease: Elastic.easeOut});
    }
    /***********************************************
        fScrollTo: scroll to an id position
    ************************************************/
    public fScrollTo(tym, yPos) {
        // scroll to the element with the ID "#someID":
        // TweenMax.to(window, tym, { scrollTo: elemId });
        // scroll to 400 pixels down from the top
        TweenMax.to(window, tym, { scrollTo: yPos });
        // or to specify which axis (x or y), use the object syntax:
        // TweenMax.to(window, tym, { scrollTo: { y: 400, x: 250 } });
    }
    /***********************************************
        fScrollTo2: for animated anchor linking
    ************************************************/
    public fScrollTo2(tym, elemId, yOffset) {
        TweenMax.to( window, tym, { scrollTo: { y: '#' + elemId, offsetY: yOffset, autoKill: false }});
    }

    /*-==============================================
    fShowHideTopNav: Hide top nav bar when scroll up
                   Show top nav bar on scroll down
	=================================================-*/
    public fShowHideTopNav(id, showPos, hidePos) {
        let prevScrollpos = window.pageYOffset;
        console.log('id: ', id);
        window.onscroll = function() {
        const currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
            // document.getElementById('r3NavBarKontainer').style.top = '0';
            document.getElementById(id).style.top = showPos + 'px'; // '0';
            } else {
            // document.getElementById('r3NavBarKontainer').style.top = '-50px';
            document.getElementById(id).style.top = hidePos + 'px'; // '-50px';
            }
            prevScrollpos = currentScrollPos;
            // console.log('prevScrollpos: ', prevScrollpos);
        };
    }

    /***********************************************
        fCursorPointer: 'no-link' = no cursor
    ************************************************/
    public fCursorPointer(link, id) {
        if (link === 'no-link') {
            // document.getElementsByClassName(elem).style.cursor = 'none';
            document.getElementById(id).style.cursor = 'none';
            // const x = document.querySelector(elem),
            // s = x.style;
            // s.cursor = 'none';
            // x.style.cursor = 'none';
        } else {
            document.getElementById(id).style.cursor = 'pointer';
            // const x = document.querySelector(elem),
            // s = x.style;
            // s.cursor = 'pointer';
        }
        console.log('link: ', link);
    }


}
