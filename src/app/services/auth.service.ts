import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { urls } from '../resources/urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }


  login(credentials){


    const url = urls.base_url + urls.auth.login;

    return this.http.post(url, credentials);

  }

  register(data){

    const url = urls.base_url + urls.users;

    return this.http.post(url, data);

  }

  //helper functions

  authUser(){

     const url = urls.base_url + urls.auth.user;

    return this.http.get(url);
  }
}
