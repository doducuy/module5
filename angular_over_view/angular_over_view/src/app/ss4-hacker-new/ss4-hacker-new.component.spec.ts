import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ss4HackerNewComponent } from './ss4-hacker-new.component';

describe('Ss4HackerNewComponent', () => {
  let component: Ss4HackerNewComponent;
  let fixture: ComponentFixture<Ss4HackerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ss4HackerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ss4HackerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
