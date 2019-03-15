/***********************************************************
* Project: R.Lloyd Gonzales Resume Website
* URL: RLGonzales.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 030119
* Note: Component for resume. Uses "experience.component"
        for the main content on the right side.
        Doesn't use AngularMaterial!
***********************************************************/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceService } from './../../services/experience.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {

    /*--===| public variables |===--*/
    public aTechnologiesData = [];
    public aSocialMediaData = [];
    public propertyTrue = true;
    public bFontFamily = true;
    public bFontSize = true;
    public bBgColor = true;

    /*--===| rxjs: subscription |===--*/
    public subsExperience: Subscription;




    /*--===|•-----•«÷»•-----•|===--*/


    constructor(private _experienceService: ExperienceService) {}

    ngOnInit() {
        /*-=================================
        =-----=|••• OBSERVABLE •••|=-----=
        ====================================-*/
        this.subsExperience = this._experienceService
        .experienceData()
        .subscribe(data => {
            // this.allData = data;
            const contactInfoElement: any = data[0];
            const experienceElement: any = data[1];

            /**********************************************************************
                Social: Collect data and populate array
            **********************************************************************/
            for (let l = 0; l < contactInfoElement.social.length; l++) {
                this.aSocialMediaData[this.aSocialMediaData.length] = contactInfoElement.social[l];
            }

            /**********************************************************************
                Technologies: Collect data and populate array
            **********************************************************************/
            for (let i = 0; i < contactInfoElement.technologies.length; i++) {
                this.aTechnologiesData[this.aTechnologiesData.length] = contactInfoElement.technologies[i];
            }
            console.log('this.aTechnologiesData: ', this.aTechnologiesData);
        });

    }

    /*-==================================
        Unsubscribe to avoid memory leaks
    =====================================-*/
    ngOnDestroy() {
        this.subsExperience.unsubscribe();
    }

    /*-=====================================
    =-----=|••• Public Functions •••|=-----=
    ========================================-*/

    /*--=======| ngStyle: TEST |========--*/
    public fNgStyleTech() {
        const styles = {
            'font-family':      this.bFontFamily    ? 'open sans'   : 'serif',
            'font-size':        this.bFontSize      ? '.4em'        : '1em',
            'background-color': this.bBgColor       ? 'none'        : 'red'
        };
        return styles;
    }
}
