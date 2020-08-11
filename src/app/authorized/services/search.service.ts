import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  value  = new Subject<any>();

  constructor() { 

  }

  absorb(value){

    this.value.next(value);

  }

  emmit(){

    return this.value.asObservable();

  }
}
