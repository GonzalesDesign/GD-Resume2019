
/***********************************************************
* Project: R.Lloyd Gonzales Resume Website
* URL: RLGonzales.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 030119
* Note: Component for resume2. Use AngularMaterial!
        Single page component for simplicity.
        Share JSON data with "resume.component".
        ViewEncapsulation: use to edit mat encapsulation
***********************************************************/

import {
    Component,
    OnInit,
    OnDestroy,
    HostListener,
    ViewEncapsulation
} from '@angular/core';
import { ExperienceService } from './../../services/experience.service';
import { Subscription } from 'rxjs';
import { FunkzionsService } from './../../services/funkzions.service';

@Component({
    selector: 'app-resume2',
    templateUrl: './resume2.component.html',
    styleUrls: ['./resume2.component.scss'],
    encapsulation: ViewEncapsulation.None // None, Native, Emulated
})
export class Resume2Component implements OnInit, OnDestroy {
    /*-==========================================
	=-----=|••• Variables Declaration •••|=-----=
	=============================================-*/
    public menuItem = '.menu-item';
    public verticalToolbar = '.hamburger-menu';
    public topBarNav = '.top-bar-nav';

    public displayHamburger: boolean;

    public showMenu: boolean;
    public showLogo: boolean;
    public showMobile: boolean;

    public screenWidth: number;


    /*--===| data arrays |===--*/
    public aAllMenu = [];
    public aAllContactInfoData = [];
    public aAllExperienceData = [];
    public profileSummary: string;
    public aEducationData = [];
    public aSocialMediaData = [];
    public aTechnologiesData = [];
    public techId = '#techIdTestX';

    /*--===| menu content |===--*/
    public aMenuIcons = [];
    public aMenuNames = [];
    // public menuIcon0: string; // = 'menu';
    // public menuName0: string; //  = 'MENU';

    // public menuIcon1: string; // = 'mood';
    // public menuName1: string; // = 'PROFILE SUMMARY';

    // public menuIcon2: string; // = 'work';
    // public menuName2: string; // = 'EXPERIENCE';

    // public menuIcon3: string; // = 'school';
    // public menuName3: string; // = 'EDUCATION';

    // public menuIcon4: string; // = 'share';
    // public menuName4: string; // = 'SOCIAL MEDIAS';

    // public menuIcon5: string; // = 'memory';
    // public menuName5: string; // = 'TECHNOLOGIES';

    /*--===|•-----•«÷»•-----•|===--*/

    /*--===| rxjs: subscription |===--*/
    public subsExperience: Subscription;

    /*-=================================
	=-----=|••• DI: Services •••|=-----=
	====================================-*/
    constructor(private _experienceService: ExperienceService,
                private _funkzion: FunkzionsService ) {}

    ngOnInit() {
        this.fResizeMe();
        /*-=================================
						=-----=|••• OBSERVABLE •••|=-----=
				====================================-*/
        this.subsExperience = this._experienceService
            .experienceData()
            .subscribe(data => {
                // this.allData = data;
                const contactInfoElement: any = data[0];
                const experienceElement: any = data[1];

                this.aAllContactInfoData[this.aAllContactInfoData.length] = contactInfoElement;

                this.profileSummary = contactInfoElement.profileSummary;

                /**********************************************************************
                    Menu Nav: Collect data and populate array

                **********************************************************************/
                /*--= first element for hamburger menu =--*/
                // this.menuIcon0 = contactInfoElement.menu[0].menuIcon;
                // this.menuName0 = contactInfoElement.menu[0].name;
                // this.menuIcon1 = contactInfoElement.menu[1].menuIcon;
                // this.menuName1 = contactInfoElement.menu[1].name;
                // this.menuIcon2 = contactInfoElement.menu[2].menuIcon;
                // this.menuName2 = contactInfoElement.menu[2].name;
                // this.menuIcon3 = contactInfoElement.menu[3].menuIcon;
                // this.menuName3 = contactInfoElement.menu[3].name;
                // this.menuIcon4 = contactInfoElement.menu[4].menuIcon;
                // this.menuName4 = contactInfoElement.menu[4].name;
                // this.menuIcon5 = contactInfoElement.menu[5].menuIcon;
                // this.menuName5 = contactInfoElement.menu[5].name;

                /*--= gather all social data and push to this.aAllMenu array =--*/
                for (let m = 0; m < contactInfoElement.menu.length; m++) {
                    this.aAllMenu[this.aAllMenu.length] = contactInfoElement.menu[m];
                    this.aMenuIcons[this.aMenuIcons.length] = contactInfoElement.menu[m].menuIcon;
                    this.aMenuNames[this.aMenuNames.length] = contactInfoElement.menu[m].name;
                    console.log('this.aMenuNames: ', this.aMenuNames);
                }
                /*--= remove the first element from array =--*/
                this.aAllMenu.shift();
                console.log('this.aAllMenu: ', this.aAllMenu);


                /**********************************************************************
                    Education: Collect data and populate array
                **********************************************************************/
                for (let e = 0; e < data[0].education.length; e++) {
                    this.aEducationData[this.aEducationData.length] = data[0].education[e];
                }
                // console.log('this.aEducationData: ', this.aEducationData);

                /**********************************************************************
                    Technologies: Collect data and populate array
                **********************************************************************/
                for (let i = 0; i < data[0].technologies.length; i++) {
                    this.aTechnologiesData[this.aTechnologiesData.length] = data[0].technologies[i];
                }
                // console.log('this.aTechnologiesData: ', this.aTechnologiesData);

                /**********************************************************************
                    Social: Collect data and populate array
                **********************************************************************/
                for (let l = 0; l < data[0].social.length; l++) {
                    this.aSocialMediaData[this.aSocialMediaData.length] = data[0].social[l];
                }
                // console.log('this.aSocialMediaData: ', this.aSocialMediaData);

                /**********************************************************************
                    Experience: Collect data and populate array
                **********************************************************************/
                for (let j = 0; j < experienceElement.length; j++) {
                    this.aAllExperienceData[this.aAllExperienceData.length] =
                        data[1][j];
                    //   console.log('this.aAllExperienceData: ', this.aAllExperienceData);
                }
            });

        //   this.fCreateSpan('classy');
        // this.fCreateTag( 'span', 'className', 'title', 1, '#techIdTest' );
        // this.fCreateLi();


    }

    /*-==================================
		Unsubscribe to avoid memory leaks
	=====================================-*/
    ngOnDestroy() {
        this.subsExperience.unsubscribe();
    }

    public fToggle() {
        this.showMenu = !this.showMenu;
        console.log('this.showMenu: ', this.showMenu);
    }

    // /*---| Button to open external links |---*/
    public fOpenXLinks(link) {
        if (link === 'no-link') {
            // this.cursorPointer2 = 'none';
            // this.cursorPointer = 'none';
            return;
        } else {
            // this.cursorPointer2 = 'pointer';
            window.open(link, 'xWindow', '', true);
        }
        console.log('link: ', link);
        // this._funkzion.fOpenXLinks(link);
    }

    /*--= Test =--*/
    public fTrackBy(index, item) {
        return item.id; // unique id corresponding to the item
    }

    public fOpenMenu() {
        this.fElementVisibility(this.menuItem, 'visible');
    }

    public fElementVisibility(e, vis) {
        const x = document.querySelector(e),
            s = x.style;
        s.visibility = vis;
    }





    public fRouterTest() {
        console.log('event.target.nodeName: '); // , event.target.nodeName);
    }

    public fCreateSpan(classname, parentId, span2class, htmlText) {
        const span1 = document.createElement('span');
        span1.className = classname;
        span1.id = 'span-id1';
        // ul.appendChild(span1);
        document.getElementById(parentId).appendChild(span1);
        // span1.innerHTML = htmlText;
        const span2 = document.createElement('span');
        span2.className = span2class;
        document.getElementById(parentId).appendChild(span2);
        span2.innerHTML = htmlText;
    }

    public fCreateSpan1(classname) {
        const newNode = document.createElement('div');
        newNode.className = classname;
        newNode.innerHTML = 'this created div contains class while created!!!';
        const parentNode = document.getElementById('techIdTestX');
        parentNode.appendChild(newNode);
        // newNode.appendTo(parentNode);
        // const span = document.createElement('span');
        // span.className = classname; // 'mdc-image-list__item imageLi';
        // span.id = idname; // 'liId'; // +[i];
        // // const spanParent = document.querySelector('#techIdTest');
        // const spanParent = document.getElementById(this.techId);
        // // spanParent.appendChild(span);
        // span.innerHTML = 'images[i].title';

        // console.log('classname: ', classname);
        // console.log('idname: ', idname);
        // console.log('spanParent: ', spanParent);
        // for(let i=0; i < images.length; i++){
        //     /*--= create span inside div =--*/
        //     let span = document.createElement("span");
        //     span.className = "mdc-image-list__label";
        //     span.id = "divId"+[i];
        //     let spanParent = document.getElementById(div.id);
        //     spanParent.appendChild(span);
        //     // document.querySelector("mdc-image-list__label").innerHTML = images[1].image
        //     span.innerHTML = images[i].title;
        // }
    }

    // fCreateTag( tagType, className, title, counter, appendedTo ) {
    //     const divName = document.createElement( tagType );
    //     divName.id = title + 'Id_' + counter; // set id
    //     divName.className = className; // title + "Class";
    //     // divName.href = '#modalCarousel';
    //     // let divNameId     = $ ("#" + title + "Id_" + counter); //get id
    //     const x = document.getElementsByClassName(divName);
    //     x.appendTo( appendedTo );
    // }

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
		• Hamburger menu: small screen
		• Horizontal nav bar: larger screen
		• HTML trigger: *ngIf="displayHamburger
	=============================================-*/
    public fResizeMe() {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth >= 900) {
            this.displayHamburger = false;
            this.showLogo = true;
            this.showMobile = false;
        } else {
            this.displayHamburger = true;
            this.showLogo = false;
            this.showMobile = true;
        }
    }
}
