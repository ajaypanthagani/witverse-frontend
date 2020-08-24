import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { urls } from '../resources/urls';

import { DataService } from '../services/data.service';
import { StorageService } from '../services/storage.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated;

  constructor(
    private http : HttpClient,
    private data : DataService,
    private storage : StorageService,
    private router : Router) { }


  login(credentials){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'skip': 'true'
      })
    };

    const url = urls.base_url + urls.auth.login;

    return this.http.post(url, credentials, httpOptions);

  }

  logout(){

    this.setAuthStatus(false);
    this.storage.clear();
    this.data.destroy();
    this.router.navigate(['u']);
    
  }

  register(data){


    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'skip': 'true'
      })
    };

    const url = urls.base_url + urls.users;

    return this.http.post(url, data, httpOptions);

  }

  //helper functions
  bootstrapAuth(){

    return this.authUser()
      .pipe(
        map( user => {
          if(user){

            this.data.setUser(user);

            this.setAuthStatus(true);

            return true;

          }
        })
      )
  }

  setAuthStatus(status){

    this.authenticated = status;

  }

  getAuthStatus(){

    return this.authenticated;

  }

  authUser(){

    const url = urls.base_url + urls.auth.user;
    return this.http.get(url);

  }


}
