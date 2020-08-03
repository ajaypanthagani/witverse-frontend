import { NgModule } from '@angular/core';

/*material imports*/
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatToolbarModule,
  ],
  exports: [
    MatToolbarModule,
  ]
})
export class MatImportsModule {}