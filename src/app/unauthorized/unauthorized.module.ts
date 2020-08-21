import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized.component';

import { AuthService } from '../services/auth.service';

import { MatImportsModule } from '../mat-imports/mat-imports.module';
import { UnauthorizedRoutingModule } from './unauthorized-routing.module';

import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

import { NgxSpinnerModule } from 'ngx-spinner';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    UnauthorizedComponent, 
    NavbarComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    MatImportsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers : [
    AuthService,
    FormBuilder,
    FormControl
  ]
})
export class UnauthorizedModule { }
