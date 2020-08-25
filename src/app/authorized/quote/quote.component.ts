import { Component, OnInit, Input } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { DataService } from '../../services/data.service';
import { ActionService } from '../services/action.service';

import { urls } from '../../resources/urls';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackbar : MatSnackBar) { }

  ngOnInit(): void {

  }

  like(){

    this.actionService.likeQuote(this.quote._id)
    .subscribe(
      (quote) => {

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
      (quote) => {

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
      (quote) => {
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
      (quote) => {
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

        this.snackbar.open('deleted succesfully', 'OK');
      },
      (error) => {

        console.log(error);
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

}
