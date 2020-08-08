import { Routes } from '@angular/router';

import { NotFoundComponent } from './common/not-found/not-found.component';

export const routes: Routes = [

    { 
        path:'a', 
        loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule) 
    },
    {
        path:'u',
        loadChildren: () => import('./unauthorized/unauthorized.module').then(m => m.UnauthorizedModule) 
    },
    {
        path:'',
        redirectTo: 'a',
        pathMatch : 'full'
    },
    {
        path: '**',
        component : NotFoundComponent
    }
];
