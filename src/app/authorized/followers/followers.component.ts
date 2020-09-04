import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConnectionsService } from '../services/connections.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  id : string;

  followers : any;

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

      this.connections.getFollowers(this.id)
      .subscribe(

        (followers) => {
          
          this.followers = followers;
          this.processing = false;

        },
        (error) => {

          this.snackbar.open('couldn\'t fetch followers', 'OK');
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
