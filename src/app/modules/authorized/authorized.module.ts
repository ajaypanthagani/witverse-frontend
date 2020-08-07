import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ExploreComponent } from './components/explore/explore.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [HomeComponent, ExploreComponent, ProfileComponent],
  imports: [
    CommonModule
  ]
})
export class AuthorizedModule { }
