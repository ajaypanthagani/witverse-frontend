import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user : any;

  quotes : any = [];

  constructor() { }

  setUser(data){

    this.user = data;

  }

  getUser(){

    return this.user;

  }

  isQuotesEmpty(){

    if(this.quotes.length > 0){

      return false;

    }

    return true;
  }

  insertQuotes(q){

    this.quotes = q.concat(this.quotes);
    
  }

  pushQuotes(q){

    this.quotes = this.quotes.concat(q);

  }

  getQuotes(){

    return this.quotes;

  }

  //destroy all data
  destroy(){
    this.user = null;
    this.quotes = [];
  }
}
