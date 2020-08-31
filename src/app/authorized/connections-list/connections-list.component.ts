import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connections-list',
  templateUrl: './connections-list.component.html',
  styleUrls: ['./connections-list.component.scss']
})
export class ConnectionsListComponent implements OnInit {
  
  @Input()
  users : any;

  constructor() { }

  ngOnInit(): void {
  }

}
