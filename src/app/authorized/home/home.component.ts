import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes : any;
  trends : any;

  //status variables
  processing : boolean;

  constructor(public data : DataService, private quoteService : QuoteService) { }

  ngOnInit(): void {

    if(this.data.isQuotesEmpty()){

      this.processing = true;

      this.quoteService.getMany(3)
      .subscribe(
        (quotes) => {

          this.data.pushQuotes(quotes);
          this.processing = false;

        },
        (error) => {

          console.log(error);
          this.processing = false;

        }
      )
    }
  }

}
