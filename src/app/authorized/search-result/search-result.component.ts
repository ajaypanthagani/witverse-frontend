import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  users : any;
  quotes : any;

  // status variables
  processing : boolean;

  // dummy data

  // quotes = [

  //   {

  //     _id : '000000000000000',
  //     text : 'failure is the first step to success!',
  //     tags : [
  //       'happy',
  //       'love',
  //       'travel'
  //     ],
  //     emotion : 'happy',
  //     author : {

  //       _id : '00000000000',
  //       username : 'apanthagani',
  //       firstname : 'Ajay',
  //       lastname : 'Panthagani',
  //       displayImage : 'https://picsum.photos/id/1001/367/267',
  //       following : [],
  //       followers : [],
  //       createdAt : Date.now(),
  //       updatedAt : Date.now(),
  //       isFollowed : false
  //   },
  //     likes : [

  //     ],
  //     comments : [
        
  //     ],
  //     isLiked : true,
  //     isSaved : false
  // }

  // ];

  constructor(private spinner : NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner.show();

  }

}
