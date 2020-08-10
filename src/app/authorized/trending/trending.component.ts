import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  @Input()
  trends;

  constructor() { }

  ngOnInit(): void {

    console.log(this.trends);
    
  }

}
