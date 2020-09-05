import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized.component';

import { MatImportsModule } from '../mat-imports/mat-imports.module';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { NgxSpinnerModule } from 'ngx-spinner';


import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmailConfirmationMessageComponent } from './email-confirmation-message/email-confirmation-message.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';



@NgModule({
  declarations: [
    UnauthorizedComponent, 
    NavbarComponent, LoginComponent, RegisterComponent, EmailConfirmationMessageComponent, PrivacyComponent, TermsComponent
  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    MatImportsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers : [
    FormBuilder,
    FormControl
  ]
})
export class UnauthorizedModule { }
