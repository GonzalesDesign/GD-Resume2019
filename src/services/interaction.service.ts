import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InteractionService {

    private _messageSource = new Subject<string>();
    public message$ = this._messageSource.asObservable();

    constructor() {}

    public fMessage(commento: string) {
        this._messageSource.next(commento);
    }
}
