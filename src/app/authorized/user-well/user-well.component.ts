import { Component, OnInit, Input } from '@angular/core';
import { ConnectionsService } from '../services/connections.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../../services/data.service';

import { urls } from '../../resources/urls';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-well',
  templateUrl: './user-well.component.html',
  styleUrls: ['./user-well.component.scss']
})
export class UserWellComponent implements OnInit {

  @Input()
  user : any;

  url : any;

  //status varaibles
  processing : boolean;

  constructor(
    private connections : ConnectionsService,
    private spinner : NgxSpinnerService,
    private snackbar : MatSnackBar,
    private data : DataService) {
    
    this.url = urls.base_url;

  }

  ngOnInit(): void {
  }

  follow(id){

    this.processing = true;
    this.spinner.show(this.user._id);
    this.connections.follow(id)
    .subscribe(

      (success) => {

        this.user.isFollowed = true;
        this.data.user.following.push(this.user._id);
        this.processing = false;
        this.spinner.hide(this.user._id);

      },
      (error) => {

        this.snackbar.open('couldn\'t follow user', 'OK');
        this.processing = false;
        this.spinner.hide(this.user._id);

      } 
    )
  }

  unfollow(id){

    this.processing = true;
    this.spinner.show(this.user._id);
    this.connections.unfollow(id)
    .subscribe(

      (success) => {

        this.user.isFollowed = false;
        this.data.user.following = this.data.user.following.filter((follower) => follower !== this.user._id);
        this.processing = false;
        this.spinner.hide(this.user._id);

      },
      (error) => {

        this.snackbar.open('couldn\'t unfollow user', 'OK');
        this.processing = false;
        this.spinner.hide(this.user._id);

      } 
    )
  }

}
