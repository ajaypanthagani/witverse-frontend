import { Component, OnInit } from '@angular/core';
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

  constructor( private userService : UserService ) { }

  ngOnInit(): void {

    this.processing = true;
    this.userService.getRandom(4)
    .subscribe(

      (users)=>{

        this.users = users;
        this.processing = false;

      },
      (error) => {

        console.log(error);

        this.processing = false;
        
      }
    )
  }

}
