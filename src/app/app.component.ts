import { Component, OnInit } from '@angular/core';
import { ConnectionService } from './services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'witverse-angular';
  connected : boolean;

  constructor(private connection : ConnectionService){

  }

  ngOnInit(){

    this.connection.status()
      .subscribe(

        (status) => {

          this.connected = status;
          
        }
      );

  }
}
