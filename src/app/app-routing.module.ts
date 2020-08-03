import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*routes imports*/
import { routes } from './routes';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
