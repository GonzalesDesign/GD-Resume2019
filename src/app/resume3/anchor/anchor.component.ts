import { ExperienceService } from './../../../services/experience.service';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { FunkzionsService } from '../../../services/funkzions.service';

@Component({
    selector: 'app-anchor',
    templateUrl: './anchor.component.html',
    styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit, OnDestroy {
    public aAllMenu = [];
    public aMenuIcons = [];
    public aMenuNames = [];
    public subsExperience: Subscription;
    public aAnchorTest = [];
    public aAllExperienceData = [];
    public myStyles: any;
    public anchorKontainer = ('.anchor-kontainer');

    constructor(private _experienceService: ExperienceService,
                private _funkzions: FunkzionsService) {}

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
                    Top Nav Menu: Collect data and populate array
                **********************************************************************/

                /*--= gather all social data and push to this.aAllMenu array =--*/
                for (let m = 0; m < contactInfoElement.menu.length; m++) {
                    this.aAllMenu[this.aAllMenu.length] = contactInfoElement.menu[m];
                    this.aMenuIcons[this.aMenuIcons.length] = contactInfoElement.menu[m].menuIcon;
                    this.aMenuNames[this.aMenuNames.length] = contactInfoElement.menu[m].name;
                    // console.log('this.aMenuNames: ', this.aMenuNames);
                }
                /*--= remove the first element from array =--*/
                this.aAllMenu.shift();
                // console.log('this.aAllMenu: ', this.aAllMenu);

                /**********************************************************************
                    Experience: Collect data and populate array
                **********************************************************************/
               for (let j = 0; j < experienceElement.length; j++) {
                this.aAllExperienceData[this.aAllExperienceData.length] =
                    data[1][j];
                //   console.log('this.aAllExperienceData: ', this.aAllExperienceData);
            }
            });

        this.aAnchorTest = new Array(12);
        this.myStyles = {
            // 'background-color': 'lime',
            'font-size': '20px',
            'font-weight': 'bold',
            margin: '2em',
            padding: '1em',
            border: '1px solid grey'
        };
    }

    /*-==================================
		Unsubscribe to avoid memory leaks
	=====================================-*/
    ngOnDestroy() {
        this.subsExperience.unsubscribe();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        // we'll do some stuff here when the window is scrolled
        // this._funkzions.fScrollTo(1, '20');
    }

    public onSlideUp() {
        this._funkzions.fAnimYPos(this.anchorKontainer, 2, '1500px');
    }
    public onSlideDown() {
        this._funkzions.fAnimYPos(this.anchorKontainer, 3, '-1500px');
        // this._funkzions.fAnimYPos(this.anchorKontainer, 6, -(this.dataz.footerTop - 100));
    }
    public onSlideLeft() {
        this._funkzions.fAnimXPos(this.anchorKontainer, 2, '-200px');
        // console.log('this.r3TopKontainer');
    }
    public onSlideRight() {
        this._funkzions.fAnimXPos(this.anchorKontainer, 2, '200px');
        // console.log('this.r3TopKontainer');
    }
    public onScrollTo(elemId) {
        this._funkzions.fScrollTo(2, elemId);
        // this._funkzions.fAnimXPos(this.anchorKontainer, 2, '200px');
        // console.log('this.r3TopKontainer');
    }
    public onScrollTo2(elemId) {
        this._funkzions.fScrollTo2(2, elemId, 50);
        // this._funkzions.fAnimXPos(this.anchorKontainer, 2, '200px');
        // console.log('this.r3TopKontainer');
    }
}
