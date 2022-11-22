import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghichCssComponent } from './nghich-css.component';

describe('NghichCssComponent', () => {
  let component: NghichCssComponent;
  let fixture: ComponentFixture<NghichCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghichCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghichCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
