import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { ActionService } from '../services/action.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-quote-likes',
  templateUrl: './quote-likes.component.html',
  styleUrls: ['./quote-likes.component.scss']
})
export class QuoteLikesComponent implements OnInit {

  quoteId : any;

  likes : any;

  constructor(    
  @Inject(MAT_BOTTOM_SHEET_DATA) public bottomSheetData: any,
  private actionService : ActionService,
  private snackbar : MatSnackBar,
  private ref : ChangeDetectorRef) { 

    this.quoteId = this.bottomSheetData.quoteId;
    this.getLikes(this.quoteId);

  }

  ngOnInit(): void {
  }

  getLikes(quoteId){

    this.actionService.getQuoteLikes(quoteId)
    .subscribe(
      (likes) => {

        this.likes = likes;

        console.log(likes);
        
        this.ref.markForCheck();

      },
      (error) => {

        this.snackbar.open('couldn\'t fetch likes', 'OK');
      }
    )
  }

}
