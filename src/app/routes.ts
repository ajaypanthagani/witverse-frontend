import { Routes } from '@angular/router';
import { AuthGuardService, UnauthGuardService } from './services/auth-guard.service';
import { NotFoundComponent } from './general/not-found/not-found.component';

export const routes: Routes = [

    { 
        path:'a',
        canActivate : [AuthGuardService],
        loadChildren: () => import('./authorized/authorized.module').then(m => m.AuthorizedModule)
    },
    {
        path:'u',
        canActivate : [UnauthGuardService],
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
