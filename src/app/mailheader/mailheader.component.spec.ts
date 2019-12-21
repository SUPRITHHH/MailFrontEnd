import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailheaderComponent } from './mailheader.component';

describe('MailheaderComponent', () => {
  let component: MailheaderComponent;
  let fixture: ComponentFixture<MailheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
