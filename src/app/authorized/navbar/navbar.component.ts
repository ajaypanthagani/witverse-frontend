import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input()
  color : string;

  @Input()
  sticky : boolean;

  @Input()
  elevate : boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
