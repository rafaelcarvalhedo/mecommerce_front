import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-typeahead',
  templateUrl: './input-typeahead.component.html',
  styleUrls: ['./input-typeahead.component.scss']
})
export class InputTypeaheadComponent implements OnInit {

  @Input()
  model: any = '';
  @Input()
  search: any ;
  constructor() { }

  ngOnInit() {
  }

}
