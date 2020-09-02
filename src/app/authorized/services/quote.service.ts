import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../resources/urls';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor( private http : HttpClient) { }


  getAll(){

    const url = urls.base_url + urls.quotes;

    return this.http.get(url);

  }

  getOne(id){

    const url = urls.base_url + urls.quote.replace('{quote-id}', ''+id);
    return this.http.get(url);

  }

  getMany(n){

    const url = urls.base_url + urls.infinite.quoteslimit.replace('{limit}', ''+n);

    return this.http.get(url);

  }

  getRange(id, n){

    const url = urls.base_url + urls.infinite.quotesrange
    .replace('{starting-id}', '' + id)
    .replace('{limit}', '' + n);

    return this.http.get(url);

  }

  getQuotesBy(userId){

    const url = urls.base_url + urls.quotesBy
    .replace('{user-id}', '' + userId);

    return this.http.get(url);

  }

  post(quote){

    const url = urls.base_url + urls.quotes;

    return this.http.post(url, quote);

  }

  put(id, quote){

    const url = urls.base_url + urls.quote.replace('{quote-id}', id);

    return this.http.put(url, quote);

  }

  delete(id : any){

    const url = urls.base_url + urls.quote.replace('{quote-id}', ''+id);

    return this.http.delete(url);

  }
}
