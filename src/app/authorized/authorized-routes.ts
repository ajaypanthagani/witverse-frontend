import { Routes } from '@angular/router';

/*component imports*/
import { AuthorizedComponent } from './authorized.component';

import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ExploreGridComponent } from './explore-grid/explore-grid.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';

export const routes: Routes = [

    {
        path : "",
        component : AuthorizedComponent,
        children : [
            
            {
                path : "home",
                component : HomeComponent
            },
            {
                path : "explore",
                component : ExploreComponent,
                children : [

                    {
                        path : "",
                        component : ExploreGridComponent
                    },
                    {
                        path : "search",
                        component : SearchResultComponent
                    }
                ]
            },
            {
                path : "profile/:id",
                component : ProfileComponent,
                children : [

                    {
                        path : "followers",
                        component : FollowersComponent
                    },
                    {
                        path : "following",
                        component : FollowingComponent
                    }
                ]
            },
            {
                path : "",
                redirectTo : "home",
                pathMatch : "full"
            }
        ]
    }
];
