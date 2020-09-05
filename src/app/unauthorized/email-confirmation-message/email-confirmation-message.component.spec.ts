import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmationMessageComponent } from './email-confirmation-message.component';

describe('EmailConfirmationMessageComponent', () => {
  let component: EmailConfirmationMessageComponent;
  let fixture: ComponentFixture<EmailConfirmationMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConfirmationMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConfirmationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
