import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { R3ContentComponent } from './r3-content/r3-content.component';

@Component({
    selector: 'app-resume3',
    templateUrl: './resume3.component.html',
    styleUrls: ['./resume3.component.scss']
})
export class Resume3Component implements OnInit, AfterViewInit {

    // @ViewChild(R3ContentComponent) child;

    constructor() {}

    // public message: string;

    ngOnInit() {

    }

    ngAfterViewInit() {
        // this.message = this.child.message;
        // console.log('this.message: ', this.message);
    }
}
