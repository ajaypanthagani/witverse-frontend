import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  data : any;

  constructor(private search : SearchService) { 

    this.search.emmit().subscribe(
      (data) => {

        this.data = data;
        
      }
    )
  }

  ngOnInit(): void {
  }

}
