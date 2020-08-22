import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user : any;

  constructor(private data : DataService, public auth : AuthService){

    this.user = this.data.getUser();
    
  }

  ngOnInit(): void {
    
  }

}
