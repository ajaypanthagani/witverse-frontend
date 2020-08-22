import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user : any = {};

  constructor() { }

  setUser(data){

    this.user = data;

  }

  getUser(){

    return this.user;

  }
}
