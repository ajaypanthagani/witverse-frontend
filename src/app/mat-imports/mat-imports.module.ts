import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/*material imports*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule
  ],
  exports : [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatRadioModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule
  ]
})
export class MatImportsModule { }
