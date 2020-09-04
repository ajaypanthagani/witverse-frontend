import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConnectionsService } from '../services/connections.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  id : string;

  following : any;

  //status variables
  processing : boolean;

  constructor(
    private route : ActivatedRoute,
    private connections : ConnectionsService,
    private locaction : Location,
    private snackbar : MatSnackBar) { 

    this.route.parent.params.subscribe(params => {

      this.id = params.id;

      this.processing = true;

      this.connections.getFollowing(this.id)
      .subscribe(

        (following) => {
          
          this.following = following;
          this.processing = false;

        },
        (error) => {

          this.snackbar.open('couldn\'t fetch following', 'OK');
          this.processing = false;

        }
      )

    });
  }

  ngOnInit(): void {
  }

  goBack(){

    this.locaction.back();

  }

}
