import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  @Input()
  quotes : [];

  constructor() { }

  ngOnInit(): void {
  }

}
