import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { R4TopNavComponent } from './r4-top-nav.component';

describe('R4TopNavComponent', () => {
  let component: R4TopNavComponent;
  let fixture: ComponentFixture<R4TopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R4TopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(R4TopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
