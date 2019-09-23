import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from '../../pedido/shared/order-item.model';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  @Input()
  orderItem: OrderItem;
  constructor() { }

  ngOnInit() {
  }

}
