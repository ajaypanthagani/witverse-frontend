import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id : any;
  user : any;

  //status variables
  processing : boolean;

  constructor(
    private route : ActivatedRoute, 
    private userService : UserService,
    public data : DataService,
    private snackbar : MatSnackBar){

    this.user = null;
    this.route.params.subscribe(params => {

      this.id = params.id;
      this.processing = true;

      this.userService.getOne(this.id)
      .subscribe(
        
        (user) => {
  
          this.user = user;

          this.processing = false;
  
        },
        (error) => {

          this.processing = false;
          this.snackbar.open('couldn\'t fetch the profile', 'OK');
        }
      )

    });
    
  }

  ngOnInit(): void {
    
  }

}
