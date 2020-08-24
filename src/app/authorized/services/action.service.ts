import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../resources/urls';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private http : HttpClient) { }


  getQuoteLikes(id){

    const url = urls.base_url + urls.likes.like_quote.replace('{quote-id}', ''+id);

    return this.http.get(url);
  }

  likeQuote(id){

    const url = urls.base_url + urls.likes.like_quote.replace('{quote-id}', id);

    return this.http.post(url, {});

  }

  unlikeQuote(id){

    const url = urls.base_url + urls.likes.like_quote.replace('{quote-id}', id);

    return this.http.delete(url, {});

  }

  getSavedQuotes(){

    const url = urls.base_url + urls.quotes;

    return this.http.get(url);
  }

  saveQuote(id){

    const url = urls.base_url + urls.save.quotes;

    return this.http.post(url, {quoteId : id});

  }

  unsaveQuote(id){

    const url = urls.base_url + urls.save.quote.replace('{quote-id}', ''+id);

    return this.http.delete(url);
    
  }

  getCommentLikes(id){

    const url = urls.base_url + urls.likes.like_comment.replace('{comment-id}', id);

    return this.http.get(url);
  }

  likeComment(id){

    const url = urls.base_url + urls.likes.like_comment.replace('{comment-id}', id);

    return this.http.post(url, {});

  }

  unlikeComment(id){

    const url = urls.base_url + urls.likes.like_quote.replace('{comment-id}', id);

    return this.http.delete(url, {});

  }

}
