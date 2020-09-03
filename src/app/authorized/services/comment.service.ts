import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urls } from '../../resources/urls';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor( private http : HttpClient) { }


  getAll(quoteId){

    const url = urls.base_url + urls.comments.replace('{quote-id}', ''+quoteId);

    return this.http.get(url);

  }

  getOne(quoteId, commentId){

    const url = urls.base_url + urls.comment.replace('{quote-id}', ''+quoteId).replace('{comment-id}', commentId);
    return this.http.get(url);

  }

  getMany(quoteId, n){

    const url = urls.base_url + urls.infinite.commentslimit.replace('{quote-id}', quoteId).replace('{limit}', ''+n);

    return this.http.get(url);

  }

  getRange(quoteId, startingId, n){

    const url = urls.base_url + urls.infinite.commentsrange
    .replace('{quote-id}', quoteId)
    .replace('{starting-id}', '' + startingId)
    .replace('{limit}', '' + n);

    return this.http.get(url);

  }

  post(quoteId, comment){

    const url = urls.base_url + urls.comments.replace('{quote-id}', quoteId);

    return this.http.post(url, comment);

  }

  put(quoteId, commentId, comment){

    const url = urls.base_url + urls.comment.replace('{quote-id}', quoteId).replace('{comment-id}', commentId);

    return this.http.put(url, comment);

  }

  delete(quoteId, commentId){

    const url = urls.base_url + urls.comment
    .replace('{quote-id}', ''+quoteId)
    .replace('{comment-id}', commentId);

    return this.http.delete(url);

  }
}
