import {
    Component,
    OnInit,
    ElementRef,
    AfterViewInit,
    ViewChild,
    Input,
    HostListener
} from '@angular/core';
import { InteractionService } from '../../../services/interaction.service';
import { R3TopNavComponent } from '../r3-top-nav/r3-top-nav.component';

@Component({
    selector: 'app-r3-content',
    templateUrl: './r3-content.component.html',
    styleUrls: ['./r3-content.component.scss']
})
export class R3ContentComponent implements OnInit, AfterViewInit {

    @ViewChild('myFooterRef') ref1: ElementRef;
    @ViewChild('myFooterRef2') ref2: ElementRef;

    // @Input() datax: R3TopNavComponent;

    public footerTop: number; //  = 1234567890; // : number;
    // public name: string; // = 'Vishwas';

    // message = 'Hola Mundo!';

    mensahe = 'kumusta kayo dyan';
    // mensahe: string; // = 'kumusta kayo dyan'

    public aItemsTest = [];

    constructor(
        public elRef: ElementRef,
        private _interactionService: InteractionService
    ) {}

    ngOnInit() {
        this.aItemsTest = new Array(12);

        // this.name = 'Odee Poot';

        // this.mensahe = 'Kumusta kayong lahat.';

        // console.log('this.datax.message: ', this.datax.message);

        // this.footerTop = this.ref2.nativeElement.getBoundingClientRect().top;

        /*--===| Subscribe to InteractionService |===--*/
        this._interactionService.message$.subscribe(
            message => {

            } );


        //   this.fScrollPos();
        // console.log('offsetLeft: ', this.elRef.nativeElement.offsetLeft);
        // console.log('offsetTop: ', this.elRef.nativeElement.offsetTop);
        // console.log('getBoundingClientRect 2: ', this.ref2.nativeElement.getBoundingClientRect().width);
    }

    ngAfterViewInit() {
        this.mensahe = 'Kumusta kayong lahat.';
        this.footerTop = this.ref1.nativeElement.getBoundingClientRect().top;
        // console.log('getBoundingClientRect: ', this.ref1.nativeElement.getBoundingClientRect());
        // console.log('getBoundingClientRect 2: ', this.ref2.nativeElement.getBoundingClientRect().top);
        // console.log('ref2 2: ', this.ref2);
        // console.log(this.ref1.nativeElement.value);
        console.log('this.footerTop: ', this.footerTop);
    }

    /*---- Screen Resize ----*/
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.footerTop = this.ref2.nativeElement.getBoundingClientRect().top;
    console.log('this.footerTop: ', this.footerTop);
    // console.log('this.footerTop: ', this.footerTop, ' ||: ', event);

    // this.resizeMe();
  }

    //   document.querySelector(".div1").style.height = window.getComputedStyle(document.querySelector(".div2")).height;

    public fScrollPosXXX() {
        const div = window.getComputedStyle(document.querySelector('.footer'))
            .height; // ('footer');
        // const div = document.querySelector('.footer').style.height; // ('footer');
        // const div = document.getElementById('footer');
        // const divHt = div.height();
        // const div = document.getElementById('footer').offsetTop;
        // const div = document.getElementById('footer').clientTop;
        // const div = document.getElementById('footer').scrollTop;
        // document.getElementById("pos").innerHTML = div;
        console.log('div: ', div);
        // console.log('divHt: ', divHt);
        console.log('window.pageYOffset: ', window.pageYOffset);
        console.log(
            'document.documentElement.scrollTop: ',
            document.documentElement.scrollTop
        );
        console.log('document.body.scrollTop: ', document.body.scrollTop);
    }
}
