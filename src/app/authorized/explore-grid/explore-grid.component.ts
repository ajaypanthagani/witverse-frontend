import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { QuoteComponent } from '../quote/quote.component';
import { QuoteService } from '../services/quote.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-explore-grid',
  templateUrl: './explore-grid.component.html',
  styleUrls: ['./explore-grid.component.scss']
})
export class ExploreGridComponent implements OnInit {

  quotes : any;

  //status variables
  processing : boolean;

  constructor(
    private dialog : MatDialog,
    private quoteService : QuoteService,
    private snackbar : MatSnackBar
  ) { 

    this.processing = true;
    this.quoteService.getAll()
    .subscribe(

      (quotes : []) => {

        this.quotes =  quotes.reverse();

        this.processing = false;

      },
      (error) => {

        this.snackbar.open('couldn\'t fetch quotes');
        this.processing = false;

      }
    )
  }

  ngOnInit(): void {
  }

  openQuote(quote){

    let dialogRef = this.dialog.open(QuoteComponent);
    let instance = dialogRef.componentInstance;
    instance.quote = quote;

  }

}
