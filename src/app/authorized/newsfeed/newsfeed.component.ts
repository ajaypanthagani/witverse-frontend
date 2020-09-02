import { Component, OnInit, Input } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { DataService } from '../../services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  @Input()
  quotes : any;


  //status variables
  processing : boolean = false;

  constructor(
    private data : DataService, 
    private quoteService : QuoteService,
    private spinner : NgxSpinnerService) {
  }

  ngOnInit(): void {

  }

  fetchQuotes(id, n){

    this.processing = true;

    this.spinner.show('quote-loader');

    this.quoteService.getRange(id, n)
      .subscribe(
        (quotes) => {

          this.spinner.hide('quote-loader');
          this.data.pushQuotes(quotes);
          this.processing = false;
        },
        (error) => {

          this.spinner.hide('quote-loader');
          this.processing = false;

        }
      )
  }

  scrollFunction(){

    if(!this.processing){

      this.fetchQuotes(this.quotes[this.quotes.length-1]._id, 5);

    }

  }

}
