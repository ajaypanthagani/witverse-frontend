import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnauthorizedComponent } from './unauthorized.component';

import { MatImportsModule } from '../mat-imports/mat-imports.module';

import { UnauthorizedRoutingModule } from './unauthorized-routing.module';

import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    UnauthorizedComponent, 
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UnauthorizedRoutingModule,
    MatImportsModule
  ]
})
export class UnauthorizedModule { }
