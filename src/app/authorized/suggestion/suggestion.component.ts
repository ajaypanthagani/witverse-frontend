import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import { urls } from '../../resources/urls';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss']
})
export class SuggestionComponent implements OnInit {

  users : any;

  url : any;

  constructor(private userService : UserService) { 

    this.url = urls.base_url;
    
  }

  ngOnInit(): void {

    this.userService.getRandom(4)
    .subscribe(

      (users)=>{

        this.users = users;

      },
      (error) => {

        console.log(error);
        
      }
    )
  }

}
