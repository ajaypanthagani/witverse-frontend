import { Routes } from '@angular/router';

/*component imports*/
import { UnauthorizedComponent } from './unauthorized.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

    {
        path : "",
        component : UnauthorizedComponent,
        children : [

            {
                path : "login",
                component : LoginComponent
            },

            {
                path : "register",
                component : RegisterComponent
            },

            {
                path : "",
                redirectTo : "login",
                pathMatch : 'full'
                
            }
        ]
    }
];
