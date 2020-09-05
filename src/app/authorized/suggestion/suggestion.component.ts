import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  users : any;

  //status variables
  processing : boolean;

  constructor( private userService : UserService, private ref : ChangeDetectorRef ) { }

  ngOnInit(): void {

    this.processing = true;
    this.userService.getRandom(4)
    .subscribe(

      (users)=>{

        this.users = users;
        this.processing = false;
        this.ref.markForCheck();

      },
      (error) => {

        console.log(error);

        this.processing = false;
        
      }
    )
  }

}
