import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  get(key){

    return localStorage.getItem(key);

  }

  set(key, value){

    localStorage.setItem(key, value);

  }

  clear(){

    localStorage.clear();
    
  }

  isPresent(key){

    return this.get(key) !== null;

  }
}
