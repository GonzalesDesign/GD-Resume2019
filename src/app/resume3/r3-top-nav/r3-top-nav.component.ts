import { Component, OnInit, OnDestroy, OnChanges, ViewChild, AfterViewInit, ElementRef, Input, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceService } from './../../../services/experience.service';
import { FunkzionsService } from '../../../services/funkzions.service';
import { InteractionService } from './../../../services/interaction.service';

import { R3ContentComponent } from '../r3-content/r3-content.component';
// import { HasElementRef } from '../../../../node_modules/@angular/material/core/typings/common-behaviors/color';

@Component({
    selector: 'app-r3-top-nav',
    templateUrl: './r3-top-nav.component.html',
    styleUrls: ['./r3-top-nav.component.scss']
})
export class R3TopNavComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

    // @ViewChild('element') element: ElementRef; // ElementRef;
    // @ViewChild('myFooterRef1') element: ElementRef; // R3ContentComponent; // ElementRef;

    // @ViewChild(R3ContentComponent) myFooterRef: R3ContentComponent; // ElementRef;

    // @ViewChild('myFooterRef') element: HasElementRef;

    // @ViewChild('R3ContentComponent') child: R3ContentComponent;
    // @ViewChild(R3ContentComponent) child;


    // @Input() contentPos: R3ContentComponent;

    @Input() dataz: R3ContentComponent;

    public mainKontainer = ('.r3-main-kontainer');
    public contentKontainer = ('.content-kontainer');
    public contentKontainerId = ('#contentKontainer');
    /*--===| public variables |===--*/
    public r3TopKontainer = ('#r3TopKontainer');
    public r3NavBarKontainer = ('#r3NavBarKontainer');
    // public aTechnologiesData = [];
    public aAllMenu = [];
    public aMenuIcons = [];
    public aMenuNames = [];

    /*--===| rxjs: subscription |===--*/
    public subsExperience: Subscription;

    /*--===|•-----•«÷»•-----•|===--*/

    constructor(private _experienceService: ExperienceService,
                private _funkzions: FunkzionsService,
                public elRef: ElementRef,
                private _interactionService: InteractionService) {}

    // message: string;

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
            });


            // this.message = 'message from r3-top-nav.component.ts';

            // console.log('this.dataz.mensahe: ', this.dataz.mensahe);
            // console.log('this.dataz.footerTop: ', this.dataz.footerTop);
        // console.log('contentPos: ', this.contentPos.name);

        /*--===| fScrollNavBar |===--*/
        // this.fScrollNavBar(this.r3NavBarKontainer, '-20', '-100');

        // this.fScrollNavBar();
        // this.fScrollNavBar(this.r3TopKontainer);
        // this.onSlide(this.contentKontainerId, 2, '-500px');
    }

    ngAfterViewInit() {
        console.log('this.dataz.mensahe: ', this.dataz.mensahe);
        console.log('this.dataz.footerTop: ', this.dataz.footerTop);
        // this.message = this.child.message;
        // console.log('this.message: ', this.message);

        // console.log('myFooterRef1: ', this.element.nativeElement);
        // console.log('this.myFooterRef.footerTop: ', this.myFooterRef.name);
        // console.log('nativeElement: ', this.myFooterRef.element.nativeElement.getBoundingClientRect().top);
        // console.log('nativeElement: ', this.element.nativeElement.getBoundingClientRect());
        // console.log('getBoundingClientRect 2: ', this.ref2.nativeElement.getBoundingClientRect().top);
        // console.log('ref2 2: ', this.ref2);
        // console.log(this.element.nativeElement.value);
    }

    /*-==================================
		Unsubscribe to avoid memory leaks
	=====================================-*/
    ngOnDestroy() {
        this.subsExperience.unsubscribe();
    }

    ngOnChanges() {
        console.log('onChanges: this.dataz.mensahe: ', this.dataz.mensahe);
        console.log('onChanges: this.dataz.footerTop: ', this.dataz.footerTop);
    }

    /*---- Screen Resize ----*/
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('this.dataz.mensahe: ', this.dataz.mensahe);
    console.log('this.dataz.footerTop: ', this.dataz.footerTop);
  }

    public onSlideUp() {
        this._funkzions.fAnimYPos(this.contentKontainerId, 2, '-500px');
    }
    public onSlideDown() {
        this._funkzions.fAnimYPos(this.contentKontainerId, 6, -(this.dataz.footerTop - 100));
    }
    public onSlideLeft() {
        this._funkzions.fAnimXPos(this.contentKontainerId, 2, '-100px');
        // console.log('this.r3TopKontainer');
    }
    public onSlideRight() {
        this._funkzions.fAnimXPos(this.contentKontainerId, 2, '100px');
        // console.log('this.r3TopKontainer');
    }


    /*-==========================================
    fScrollNavBar: Hide nav bar when scroll up
                   Show nav bar on scroll down
	=============================================-*/
    public fScrollNavBar(id, showPos, hidePos) {
        let prevScrollpos = window.pageYOffset;
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
        };
    }
}
