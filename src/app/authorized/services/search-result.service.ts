import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { urls } from '../../resources/urls';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {

  
  constructor(private http : HttpClient) { }


  get(resource, query){

    this.http.get('')
  }
}
