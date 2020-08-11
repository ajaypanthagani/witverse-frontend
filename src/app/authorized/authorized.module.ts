import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';

// form builder import
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

// services imports
import { QuoteService } from './services/quote.service';
import { SearchService } from './services/search.service';

/*material imports module*/
import { MatImportsModule } from '../mat-imports/mat-imports.module';

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
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ExploreGridComponent } from './explore-grid/explore-grid.component';





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
    TrendingComponent, SearchComponent, SearchResultComponent, ExploreGridComponent
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
    SearchService
    
  ]
})
export class AuthorizedModule { }
