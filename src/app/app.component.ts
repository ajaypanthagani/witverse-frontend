import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './services/connection.service';
import { AuthService } from './services/auth.service';
import { StorageService } from './services/storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'witverse-angular';
  connected : boolean;

  constructor(
    private connection : ConnectionService,
    private storage : StorageService,
    private auth : AuthService,
    private router : Router,
    private spinner : NgxSpinnerService
  ){

  }

  ngOnInit(){

    this.connection.status()
      .subscribe(

        (status) => {

          this.connected = status;
          
        }
      );

    // console.log(this.storage.isPresent('token'));

    if( this.storage.isPresent('token') ){

      this.spinner.show("boot-loader");

      this.auth.bootstrapAuth()
        .subscribe(
          (success) => {

            this.router.navigate(['a']);
            this.spinner.hide("boot-loader");
          },
          (error) => {

            this.auth.logout();
            this.spinner.hide("boot-loader");
            
          }
        );

    }

  }
}
