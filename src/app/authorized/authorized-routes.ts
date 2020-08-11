import { Routes } from '@angular/router';

/*component imports*/
import { AuthorizedComponent } from './authorized.component';

import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchResultComponent } from './search-result/search-result.component';

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
                        path : "search",
                        component : SearchResultComponent
                    }
                ]
            },
            {
                path : "profile",
                component : ProfileComponent
            },
            {
                path : "",
                redirectTo : "home",
                pathMatch : "full"
            }
        ]
    }
];
