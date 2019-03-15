import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R4ContentComponent } from './r4-content.component';

describe('R4ContentComponent', () => {
  let component: R4ContentComponent;
  let fixture: ComponentFixture<R4ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R4ContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R4ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
