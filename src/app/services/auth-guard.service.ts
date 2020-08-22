import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

import { Observable, of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth : AuthService, private router : Router) { }

  canActivate() : boolean{

    if(this.auth.getAuthStatus()){

      return true;
    }
    else{

      this.router.navigate(['u']);
      return false;
      
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class UnauthGuardService implements CanActivate {

  constructor(private auth : AuthService, private router : Router) { }

  canActivate() : boolean{

    if(this.auth.getAuthStatus()){

      this.router.navigate(['a']);
      return false;
    }
    else{

      return true;

    }
  }

}
