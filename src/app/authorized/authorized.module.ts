import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';


/*material imports module*/
import { MatImportsModule } from './mat-imports/mat-imports.module';

/*component imports*/
import { AuthorizedComponent } from './authorized.component';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NaviconsComponent } from './navicons/navicons.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { QuoteComponent } from './quote/quote.component';



@NgModule({
  declarations: [
    AuthorizedComponent, 
    HomeComponent, 
    ExploreComponent, 
    ProfileComponent, 
    NavbarComponent, 
    NaviconsComponent, 
    NewsfeedComponent, 
    QuoteComponent
  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    MatImportsModule
  ]
})
export class AuthorizedModule { }
