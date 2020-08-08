import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*routes imports*/
import { routes } from './authorized-routes';


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizedRoutingModule { }
