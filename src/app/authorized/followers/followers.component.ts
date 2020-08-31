import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ConnectionsService } from '../services/connections.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {

  id : string;

  followers : any;

  constructor(
    private route : ActivatedRoute,
    private connections : ConnectionsService,
    private locaction : Location) { 

    this.route.parent.params.subscribe(params => {

      this.id = params.id;

      this.connections.getFollowers(this.id)
      .subscribe(

        (followers) => {
          
          this.followers = followers;

        },
        (error) => {

          console.log(error);

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
