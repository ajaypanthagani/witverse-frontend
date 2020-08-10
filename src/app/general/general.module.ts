import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// material imports
import { MatImportsModule } from '../mat-imports/mat-imports.module'

//component imports
import { NotFoundComponent } from './not-found/not-found.component';
import { NoNetworkComponent } from './no-network/no-network.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    NoNetworkComponent
  ],
  imports: [
    CommonModule,
    MatImportsModule
  ]
})
export class GeneralModule { }
