import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urls } from '../../resources/urls';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  
  constructor(private http : HttpClient) { }


  get(resource, query){

    const url = urls.base_url + '/search/' + ''+resource+'?searchFor='+query;
    return this.http.get(url);

  }
}
