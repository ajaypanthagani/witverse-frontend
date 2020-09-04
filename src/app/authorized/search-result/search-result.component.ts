import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

import { ActivatedRoute } from '@angular/router';
import { SearchResultService } from '../services/search-result.service';
import { MatSnackBar } from '@angular/material/snack-bar';

import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  resource : any;
  users : any;
  quotes : any;
  data : any;

  // status variables
  processing : boolean;
  notfound : boolean;

  constructor(
    private spinner : NgxSpinnerService,
    private route : ActivatedRoute,
    private searchService : SearchResultService,
    private snackbar : MatSnackBar) { 

      this.route.queryParams
      .pipe(

        switchMap(
          
          
          (data) => {

            this.data = data;
            this.processing = true;
            this.notfound = false;
            return this.searchService.get(data.resource, data.query)
          }

        )

      )
      .subscribe(
        (results : []) => {

          if(this.data.resource === 'users'){

            this.users = results;

          }
          else{

            this.quotes = results;

          }

          if(results.length <=0 ){

            this.notfound = true;
          }

          this.processing = false;
        },
        (error) => {

          this.snackbar.open('couldn\'t fetch search results', 'OK');
          this.processing = false;

        }
      )
    
    }

  ngOnInit(): void {

    this.spinner.show();

  }

}
