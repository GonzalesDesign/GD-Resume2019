/***********************************************************
* Project: R.Lloyd Gonzales Resume Website
* URL: RLGonzales.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 030119
* Note: Component for getting experience json data.
***********************************************************/

import { Component, OnInit } from '@angular/core';
import { ExperienceService } from './../../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  // public allData = [];
  public allContactInfoData = [];
  public allExperienceData = [];

  constructor(private _experienceService: ExperienceService) { }

  ngOnInit() {
    /*---=|••• OBSERVABLE •••|=---*/
    // this._experienceService.experienceData()
    // .subscribe(data => this.allData = data);

    this._experienceService.experienceData()
    .subscribe( data => {
      // this.allData = data;
        const experienceElement: any = data[1];
        this.allContactInfoData[this.allContactInfoData.length] = data[0];
        /*--= Populating arrays =--*/
        for (let i = 0; i < experienceElement.length; i++) {
          this.allExperienceData[this.allExperienceData.length] = data[1][i];
        }
    });
  }
}
