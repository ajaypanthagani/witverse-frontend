import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes : any;
  trends : any;
  
  //dummy data
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

  // trends = [
  //   {
  //     content : 'happy',
  //     density : 1000
  //   },
  //   {
  //     content : 'journey',
  //     density : 500
  //   },
  //   {
  //     content : 'covid19',
  //     density : 980
  //   }
  // ];

  constructor() { }

  ngOnInit(): void {
  }

}
