import { Component, OnInit } from '@angular/core';
import { FunkzionsService } from '../../services/funkzions.service';

@Component({
    selector: 'app-resume4',
    templateUrl: './resume4.component.html',
    styleUrls: ['./resume4.component.scss']
})
export class Resume4Component implements OnInit {
    constructor(private _funkzions: FunkzionsService) {}

    ngOnInit() {
        // this._funkzions.fShowHideTopNav(id, showPos, hidePos);
    }
}
