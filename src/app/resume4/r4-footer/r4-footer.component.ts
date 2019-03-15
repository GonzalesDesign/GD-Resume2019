import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExperienceService } from '../../../services/experience.service';

@Component({
    selector: 'app-r4-footer',
    templateUrl: './r4-footer.component.html',
    styleUrls: ['./r4-footer.component.scss']
})
export class R4FooterComponent implements OnInit, OnDestroy {

    /*--===| rxjs: subscription |===--*/
    public subsExperience: Subscription;

    /*--===| data arrays |===--*/
    public aAllMenu = [];
    public aMenuIcons = [];
    public aMenuNames = [];
    constructor(private _experienceService: ExperienceService) {}

    ngOnInit() {
        /*---===================-•«÷»•-===================---*/
        /*=-----=|••• OBSERVABLE •••|=-----=*/
        this.subsExperience = this._experienceService
            .experienceData()
            .subscribe(data => {
                // this.allData = data;
                const contactInfoElement: any = data[0];
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
    }

    /*-==================================
		Unsubscribe to avoid memory leaks
	=====================================-*/
    ngOnDestroy() {
        this.subsExperience.unsubscribe();
    }
}
