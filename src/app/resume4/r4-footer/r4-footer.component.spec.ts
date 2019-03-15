import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R4FooterComponent } from './r4-footer.component';

describe('R4FooterComponent', () => {
  let component: R4FooterComponent;
  let fixture: ComponentFixture<R4FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R4FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R4FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
