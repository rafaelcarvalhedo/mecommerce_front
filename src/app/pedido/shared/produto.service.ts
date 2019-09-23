import { Injectable } from '@angular/core';
import {RestApiService} from '../../shared/rest-api.service';
import {Product} from './product.model';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private restApiService: RestApiService) {
  }

  getProducts() {
    return this.restApiService.getPageable<Product>('produto').pipe(map(response => response.content));
  }
  getProductByName(text) {
    return this.restApiService.getPageable<Product>('produto', { nome: text}).pipe(map(response => response.content));
  }
}
