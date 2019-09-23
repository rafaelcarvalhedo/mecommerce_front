import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-input-typeahead',
  templateUrl: './input-typeahead.component.html',
  styleUrls: ['./input-typeahead.component.scss']
})
export class InputTypeaheadComponent implements OnInit, ControlValueAccessor {

  @ViewChild('instance', {static: true}) instance: NgbTypeahead;
  @Input()
  model: any = '';
  @Input()
  search: any ;
  @Input()
  formatter: any;
  @Input()
  placeholder: string;
  @Output()
  onSelect: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onSelectItem($event){
    this.onSelect.emit($event);
  }

  clearValue() {
    this.model = null;
  }
  writeValue(obj: any): void {
    this.model = obj;
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }
}
