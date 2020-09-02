import { Component, OnInit, Input } from '@angular/core';
import { ConnectionsService } from '../services/connections.service';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { urls } from '../../resources/urls';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DisplayImageSelectionComponent } from '../display-image-selection/display-image-selection.component';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  @Input()
  user : any;

  url : string;

  //status variable
  processing : boolean = false;

  constructor(
    private connections : ConnectionsService,
    private spinner : NgxSpinnerService,
    private snackbar : MatSnackBar,
    private data : DataService,
    private auth : AuthService,
    private dialog : MatDialog) { }

  ngOnInit(): void {

    this.url = urls.base_url;
  }

  follow(id){

    this.processing = true;
    this.spinner.show(this.user._id);
    this.connections.follow(id)
    .subscribe(

      (success) => {

        this.user.isFollowed = true;
        this.processing = false;
        this.spinner.hide(this.user._id);

        this.addFollowerToUser();

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
        this.processing = false;
        this.spinner.hide(this.user._id);
        this.removeFollowerFromUser();

      },
      (error) => {

        this.snackbar.open('couldn\'t unfollow user', 'OK');
        this.processing = false;
        this.spinner.hide(this.user._id);

      } 
    )
  }

  addFollowerToUser(){

    this.user.followers.push(this.data.user._id);

  }

  removeFollowerFromUser(){

    const id = this.data.user._id;

    this.user.followers = this.user.followers.filter((userId) => userId !== id);
  }

  edit(){

    console.log("edit");

  }

  delete(){

    console.log("delete");
    
  }

  logout(){

    this.auth.logout();

  }

  changeDP(){

    if(this.user.isMe){

      this.dialog.open(DisplayImageSelectionComponent);
    }
  }

}
