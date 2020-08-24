import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private storage : StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    if(request.headers.get('skip')){
      return next.handle(request);
    }

    const token  = this.storage.get('token');
    
    const authReq = request.clone({headers: request.headers.set('Authorization', 'bearer ' + token)});

    return next.handle(authReq);

  }
}

@Injectable()
export class AuthWatchInterceptor implements HttpInterceptor {

  constructor(
    private storage : StorageService,
    private auth : AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    if(request.headers.get('skip')){
      return next.handle(request);
    }

    return next
    .handle(request)
    .pipe(tap((event: HttpEvent<any>) => {

      // do nothing

    }, 
    (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401 && this.storage.isPresent('token')) {

          this.auth.authUser()
          .subscribe(
            (user) => {

              console.log(user);

            },
            (error) => {

              this.storage.clear();
              this.auth.setAuthStatus(false);

            }
          )
        }
    }
    }));

  }
}
