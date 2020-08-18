import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  constructor(private search : SearchService, private router : Router, private route : ActivatedRoute) { 

    this.search.emmit().subscribe(
      (data) => {

        if(data){

          // resource type checking
          const startingchar = data[0];

          const type = startingchar === '@' ? 'users' : 'quotes';

          // if type equals users remove '@' symbol prefixed
          if(type==='users'){

            data = data.slice(1,);

          }


          this.router.navigate(['search'], {queryParams : {resource : type, query : data}, relativeTo : this.route});

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
