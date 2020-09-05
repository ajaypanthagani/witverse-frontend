import { Component, OnInit, Input } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { DataService } from '../../services/data.service';
import { ActionService } from '../services/action.service';
import {ClipboardModule, Clipboard} from '@angular/cdk/clipboard';


import { urls } from '../../resources/urls';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { QuoteCommentsComponent } from '../quote-comments/quote-comments.component';
import { QuoteLikesComponent } from '../quote-likes/quote-likes.component';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input()
  quote : any;

  emotions = {
    happy : 'sentiment_very_satisfied',
    sad : 'sentiment_very_dissatisfied',
    neutral : 'sentiment_satisfied'
  }

  base_url = urls.base_url;

  //status variables
  editmode : boolean = false;

  constructor(
    private quoteService : QuoteService,
    private actionService : ActionService,
    private data : DataService,
    private snackbar : MatSnackBar,
    private bottomsheet : MatBottomSheet,
    private clipboard : Clipboard) { }

  ngOnInit(): void {

  }

  like(){

    this.actionService.likeQuote(this.quote._id)
    .subscribe(
      (quote : any) => {

        this.data.quotes.forEach((q, index) =>{

          if(q._id === quote._id){

            this.data.quotes[index] = quote;
            
          }

        })

        this.quote = quote;
      },
      (error) => {

        this.snackbar.open('couldn\'t like quote!');

      }
    )
  }

  unlike(){

    this.actionService.unlikeQuote(this.quote._id)
    .subscribe(
      (quote : any) => {

        this.data.quotes.forEach((q, index) =>{

          if(q._id === quote._id){

            this.data.quotes[index] = quote;

          }

        });

        this.quote = quote;
      },
      (error) => {

        this.snackbar.open('couldn\'t like quote!', 'OK');

      }
    )
  }

  save(){

    this.actionService.saveQuote(this.quote._id)
    .subscribe(
      (quote : any) => {
        
        this.data.quotes.forEach((q, index) =>{

          if(q._id === quote._id){

            this.data.quotes[index] = quote;
            
          }

        })

        this.quote = quote;
      },
      (error)=>{

        this.snackbar.open('couldn\'t save quote', 'OK');
      }
    )
  }

  unsave(){

    this.actionService.unsaveQuote(this.quote._id)
    .subscribe(
      (quote : any) => {

        this.data.quotes.forEach((q, index) =>{

          if(q._id === quote._id){

            this.data.quotes[index] = quote;
            
          }

        })

        this.quote = quote;
      },
      (error)=>{

        this.snackbar.open('couldn\'t unsave quote', 'OK');
      }
    )
  }

  delete(){

    this.quoteService.delete(this.quote._id)
    .subscribe(
      (quote : any) => {

        this.data.quotes = this.data.quotes.filter((i)=>{

          if(this.quote._id === i._id){

            return false;

          }

          return true;

        });

        this.quote = null;

        this.snackbar.open('deleted succesfully', 'OK');
      },
      (error) => {

        this.snackbar.open('couldn\'t delete the quote', 'OK');

      }
    )
  }

  openEdit(){

    this.editmode = true;
    
  }

  closeEdit(){

    this.editmode = false;
  }


  openComments(){

    this.bottomsheet.open(QuoteCommentsComponent,
      {
        data: { quoteId : this.quote._id },
      }
    );

  }

  openLikes(){

    this.bottomsheet.open(QuoteLikesComponent,
      {
        data: { quoteId : this.quote._id },
      }
    );

  }

  share(){


    this.clipboard.copy(`${this.quote.text} -by ${this.quote.author.username} from witverse`);

    this.snackbar.open('copied quote to clipboard', 'OK');


  }

}
