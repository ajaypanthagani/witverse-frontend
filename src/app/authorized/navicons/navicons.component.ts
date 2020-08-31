import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navicons',
  templateUrl: './navicons.component.html',
  styleUrls: ['./navicons.component.scss']
})
export class NaviconsComponent implements OnInit {

  constructor(public data : DataService) { }

  ngOnInit(): void {
  }

}
