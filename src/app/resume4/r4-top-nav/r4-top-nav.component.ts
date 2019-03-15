import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceService } from '../../../services/experience.service';
import { FunkzionsService } from '../../../services/funkzions.service';

@Component({
    selector: 'app-r4-top-nav',
    templateUrl: './r4-top-nav.component.html',
    styleUrls: ['./r4-top-nav.component.scss']
})
export class R4TopNavComponent implements OnInit, OnDestroy {

    /*--===| rxjs: subscription |===--*/
    public subsExperience: Subscription;

    /*--===| data arrays |===--*/
    public aAllMenu = [];
    public aMenuIcons = [];
    public aMenuNames = [];

    public screenWidth: number;


    public fullWidth = 1000;
    public midWidth = 700;
    public smallWidth = 500;

    /*--===| boolean triggers |===--*/
    public fullWidthScreen: boolean;
    public midWidthScreen: boolean;
    public smallWidthScreen: boolean;
    public showNavBtnIcon: boolean;
    public showShortName: boolean;
    public showFullMenu: boolean;

    constructor(private _experienceService: ExperienceService,
                private _funkzions: FunkzionsService) {}

    ngOnInit() {
        /*---===================-•«÷»•-===================---*/
        /*=-----=|••• OBSERVABLE •••|=-----=*/
        this.subsExperience = this._experienceService
            .experienceData()
            .subscribe(data => {
                // this.allData = data;
                const contactInfoElement: any = data[0];
                const experienceElement: any = data[1];
                /***************************************************
                    Top Nav Menu: Collect data and populate array
                ****************************************************/
                for (let m = 0; m < contactInfoElement.menu.length; m++) {
                    this.aAllMenu[this.aAllMenu.length] = contactInfoElement.menu[m];
                    this.aMenuIcons[this.aMenuIcons.length] = contactInfoElement.menu[m].menuIcon;
                    this.aMenuNames[this.aMenuNames.length] = contactInfoElement.menu[m].name;
                    // console.log('this.aMenuNames: ', this.aMenuNames);
                }
                /*--= remove the first element from array =--*/
                this.aAllMenu.shift();
                // console.log('this.aAllMenu: ', this.aAllMenu);
            });
        /*---===================-•«÷»•-===================---*/
        this.fResizeMe();
        this._funkzions.fShowHideTopNav('r4TopNavKontainer', '0', '-70');
    }

    /*---===================-•«÷»•-===================---*/

    /*-==================================
		Unsubscribe to avoid memory leaks
	=====================================-*/
    ngOnDestroy() {
        this.subsExperience.unsubscribe();
    }

    /*---===================-•«÷»•-===================---*/

    /*-==================================
		onScrollTo2: anchor links
	=====================================-*/
    public onScrollTo2(elemId) {
        this._funkzions.fScrollTo2(2, elemId, 70);
        // this._funkzions.fAnimXPos(this.anchorKontainer, 2, '200px');
        // console.log('this.r3TopKontainer');
    }

    /*---===================-•«÷»•-===================---*//*

    /*-================================
		Viewport Resize: media queries
	===================================-*/
    @HostListener('window:resize', ['$event'])
    //  @HostListener(this._windowRef._window(), ['$event'])
    onResize(event) {
        this.fResizeMe();
    }

    /*-=========================================
		fResizeMe() = screen resizing for:
		• Hide button icons
		• Use of shortName
		• HTML trigger: *ngIf="
    =============================================-*/

    public fResizeMe() {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth > this.fullWidth) {
            // this.showNavBtnIcon = true;
            // this.showShortName = false;
            // this.showFullMenu = true;
            this.fullWidthScreen = true;
            this.midWidthScreen = false;
            this.smallWidthScreen = false;

        } else if (this.screenWidth > this.midWidth && this.screenWidth <= this.fullWidth) {
            // this.showNavBtnIcon = false;
            // this.showShortName = false;
            // this.showFullMenu = true;
            this.fullWidthScreen = false;
            this.midWidthScreen = true;
            this.smallWidthScreen = false;

        } else if (this.screenWidth > this.smallWidth && this.screenWidth <= this.midWidth) {
            // this.showNavBtnIcon = false;
            // this.showShortName = true;
            // this.showFullMenu = false;
            this.fullWidthScreen = false;
            this.midWidthScreen = false;
            this.smallWidthScreen = true;

        } else {
            this.showNavBtnIcon = true;
            this.showShortName = false;
            this.showFullMenu = true;
        }
    }


    /*---===================-•«÷»•-===================---*//*

    R4TopNavComponent: Navigation control for the whole page.
        Content is seperate from this navigation to make it
        easier to maintain. Content can be further seperated
        into their own component if the page becomes bigger.

        On screen resize <= 1180px, hide the nav icons
        <= 640px, use the shortName from json.

    *//*---===================-•«÷»•-===================---*/

}
