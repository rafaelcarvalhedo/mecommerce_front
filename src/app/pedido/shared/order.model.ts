import {OrderItem} from './order-item.model';
import {Costumer} from './cliente.model';

export class Order {
  codigo: number;
  costumer: Costumer;
  itens: Array<OrderItem>;
}
