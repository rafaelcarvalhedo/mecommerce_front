import {Component, OnInit} from '@angular/core';
import {ProdutoService} from './shared/produto.service';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/internal/operators';
import {ClienteService} from './shared/cliente.service';
import {Costumer} from './shared/cliente.model';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from './shared/product.model';
import {Order} from './shared/order.model';
import {OrderItem} from './shared/order-item.model';

@Component({
  selector: 'app-produto',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  customer: Costumer;
  orderForm: FormGroup;

  constructor(private produtoService: ProdutoService, private clienteService: ClienteService) {
    this.orderForm = new FormGroup({
      costumer: new FormControl(null, [
        Validators.required,
        Validators.nullValidator,
      ]),
      itens:  new FormArray([])
    });
  }

  ngOnInit() {
    console.log(this.produtoService);
  }

  searchProduct = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => term.length < 2 ? []
        : this.produtoService.getProductByName(term).pipe(map(response => {
          return response;
        }))))

  searchCustomer = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(term => term.length < 2 ? []
        : this.clienteService.getCustomersByName(term).pipe(map(response => {
          return response;
        }))))

  onSelectProduct(event) {
    console.log(event);
    this.addItem(event.item);
  }

  private addItem(item: Product) {
    const itensForm: FormArray = this.orderItens;
    itensForm.controls.push(new FormControl({product: item ,qty : 1}, Validators.compose([Validators.required, Validators.nullValidator])));
    console.log(this.orderForm);
  }

  formatter = (x: any) => {
    return x.nome;
  }

  get orderItens() {
    return this.orderForm.controls.itens as FormArray;
  }

}
