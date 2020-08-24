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

  constructor(public data : DataService, private quoteService : QuoteService) { }

  ngOnInit(): void {

    if(this.data.isQuotesEmpty()){

      this.quoteService.getMany(3)
      .subscribe(
        (quotes) => {

          this.data.pushQuotes(quotes);

        },
        (error) => {

          console.log(error);
        }
      )
    }
  }

}
