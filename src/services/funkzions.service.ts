/***********************************************************
 * Project: R.Lloyd Gonzales Resume Website
 * URL: RLGonzales.com
 * Contact: rolandolloyd@gmail.com
 * Copyright © 2019 GonzalesDesign
 * Version: 030119
 * Note: Miscellaneous functions
 ***********************************************************/

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FunkzionsService {
    constructor() {}

    /***********************************************
        fOpenXLinks: open external links
    ************************************************/
    public fOpenXLinks(link) {
        window.open(link, 'xWindow', '', true);
        console.log('link: ', link);
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
