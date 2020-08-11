import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  searchValue : any;

  constructor(private search : SearchService, private router : Router, private route : ActivatedRoute) { 

    this.search.emmit().subscribe(
      (data) => {

        if(data){

          this.router.navigate(['search'], {relativeTo : this.route});

        }
        else{

          this.router.navigate(['./'], {relativeTo : this.route});
          
        }
        
      }
    )
  }

  ngOnInit(): void {
  }

}
