import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizedRoutingModule } from './authorized-routing.module';

// form builder import
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

// external service imports
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// services imports
import { QuoteService } from './services/quote.service';
import { SearchService } from './services/search.service';
import { UserService } from './services/user.service';
import { ActionService } from './services/action.service';
import { ConnectionsService } from './services/connections.service';

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
import { SuggestionComponent } from './suggestion/suggestion.component';
import { UserWellComponent } from './user-well/user-well.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { ConnectionsListComponent } from './connections-list/connections-list.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { ProfileTabsComponent } from './profile-tabs/profile-tabs.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { DisplayImageSelectionComponent } from './display-image-selection/display-image-selection.component';





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
    TrendingComponent, 
    SearchComponent, 
    SearchResultComponent, 
    ExploreGridComponent, 
    SuggestionComponent, UserWellComponent, ProfileCardComponent, ConnectionsListComponent, FollowersComponent, FollowingComponent, ProfileTabsComponent, ProfileEditComponent, DisplayImageSelectionComponent
  ],
  imports: [
    CommonModule,
    AuthorizedRoutingModule,
    MatImportsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    InfiniteScrollModule
  ],
  providers : [

    FormBuilder,
    QuoteService,
    SearchService,
    UserService,
    ActionService,
    ConnectionsService
    
  ]
})
export class AuthorizedModule { }
