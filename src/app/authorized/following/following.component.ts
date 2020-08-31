import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConnectionsService } from '../services/connections.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  id : string;

  following : any;

  constructor(
    private route : ActivatedRoute,
    private connections : ConnectionsService,
    private locaction : Location) { 

    this.route.parent.params.subscribe(params => {

      this.id = params.id;

      this.connections.getFollowing(this.id)
      .subscribe(

        (following) => {
          
          this.following = following;

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
