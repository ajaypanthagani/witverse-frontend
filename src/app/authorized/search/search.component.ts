import { Component, OnInit } from '@angular/core';

import { SearchService } from '../services/search.service';

import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private search : SearchService) { 

    this.initForm();
    
  }

  ngOnInit(): void {

  }

  initForm(){

    this.searchForm = this.formBuilder.group({

      searchValue : ['']

    });

    this.searchForm.controls['searchValue'].valueChanges
    .subscribe(

      searchValue => this.search.absorb(searchValue)

    )
  }

  reset(){

    this.searchForm.reset();

  }

}
