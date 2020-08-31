import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id : any;
  user : any;

  constructor(
    private route : ActivatedRoute, 
    private userService : UserService,
    public auth : AuthService){

    this.user = null;
    this.route.params.subscribe(params => {

      this.id = params.id;
      console.log(this.id);
      this.userService.getOne(this.id)
      .subscribe(
        
        (user) => {
  
          this.user = user;

          console.log(this.user);
  
        }
      )

    });
    
  }

  ngOnInit(): void {
    
  }

}
