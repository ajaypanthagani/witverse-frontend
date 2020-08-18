import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


// mat imports module

import { MatImportsModule } from './mat-imports/mat-imports.module';

// rxjs import
import { Observable } from 'rxjs';

// http module import
import { HttpClientModule } from '@angular/common/http';

// services imports
import { ConnectionService } from './services/connection.service';

// importing ngx spinner external module
import { NgxSpinnerModule } from 'ngx-spinner';

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
    NgxSpinnerModule
  ],
  providers: [
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
