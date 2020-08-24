import { Component, OnInit, Input } from '@angular/core';
import { urls } from '../../resources/urls';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @Input()
  quote : any;

  base_url = urls.base_url;

  constructor() { }

  ngOnInit(): void {

  }

}
