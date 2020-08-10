import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';

// form builder import
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

// services imports
import { QuoteService } from './services/quote.service';

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
import { QuoteCreateComponent } from './quote-create/quote-create.component';
import { TrendingComponent } from './trending/trending.component';





@NgModule({
  declarations: [
    AuthorizedComponent, 
    HomeComponent, 
    ExploreComponent, 
    ProfileComponent, 
    NavbarComponent, 
    NaviconsComponent, 
    NewsfeedComponent, 
    QuoteComponent, 
    QuoteCreateComponent, 
    TrendingComponent
  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    MatImportsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [

    FormBuilder,
    QuoteService,
    
  ]
})
export class AuthorizedModule { }
