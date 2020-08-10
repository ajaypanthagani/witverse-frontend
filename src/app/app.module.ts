import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


// rxjs import
import { Observable } from 'rxjs';


// http module import
import { HttpClientModule } from '@angular/common/http';


// services imports
import { ConnectionService } from './services/connection.service';


/*components imports*/
import { AppComponent } from './app.component';
import { NotFoundComponent } from './common/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
