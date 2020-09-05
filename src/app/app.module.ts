import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {ClipboardModule} from '@angular/cdk/clipboard';


// mat imports module
import { MatImportsModule } from './mat-imports/mat-imports.module';

// rxjs import
import { Observable } from 'rxjs';

// http module import
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// services imports
import { ConnectionService } from './services/connection.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService, UnauthGuardService } from './services/auth-guard.service';
import { StorageService } from './services/storage.service';
import { DataService } from './services/data.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthWatchInterceptor } from './services/auth.interceptor';

// importing ngx spinner external module
import { NgxSpinnerModule } from 'ngx-spinner';

//importing ngx skeleton external module
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

/*components imports*/
import { AppComponent } from './app.component';
import { NotFoundComponent } from './general/not-found/not-found.component';
import { NoNetworkComponent } from './general/no-network/no-network.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NoNetworkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatImportsModule,
    NgxSpinnerModule,
    NgxSkeletonLoaderModule,
    ClipboardModule
  ],
  providers: [
    ConnectionService,
    DataService,
    AuthService,
    StorageService,
    AuthGuardService,
    UnauthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthWatchInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
