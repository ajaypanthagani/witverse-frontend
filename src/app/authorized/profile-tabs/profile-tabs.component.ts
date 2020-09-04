import { Component, OnInit, Input } from '@angular/core';

import { QuoteService } from '../services/quote.service';
import { ActionService } from '../services/action.service';

import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-profile-tabs',
  templateUrl: './profile-tabs.component.html',
  styleUrls: ['./profile-tabs.component.scss']
})
export class ProfileTabsComponent implements OnInit {

  id : string;

  posts : any;
  saved : any;

  //status variables
  postsProcessing : boolean;
  savedProcessing : boolean;

  constructor(
    private quoteService : QuoteService, 
    private actionService : ActionService,
    private route : ActivatedRoute,
    private snackbar : MatSnackBar) { 

      this.route.parent.params.subscribe(params => {

        this.id = params.id;

        this.postsProcessing = true;
        this.savedProcessing = true;

        this.quoteService.getQuotesBy(this.id)
        .subscribe(
    
          (quotes : []) => {
    
            this.posts = quotes.reverse();
            this.postsProcessing = false;

          },
          (error) => {
    
            this.openSB('couldn\'t fetch quotes', 'OK');
            this.postsProcessing = false;

          }
        );
    
        this.actionService.getSavedQuotes(this.id)
        .subscribe(
    
          (quotes : []) => {
    
            this.saved = quotes.reverse();
            this.savedProcessing = false;

          },
          (error) => {
    
            this.openSB('could\'nt load saved quotes', 'OK');
            this.savedProcessing = false;

    
          }
        );
  
      });
  }

  ngOnInit(): void {
  }

  openSB(message, action){

    this.snackbar.open(message, action);

  }
}
