import { Injectable } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {RestApiService} from '../../shared/rest-api.service';
import {Costumer} from './cliente.model';

@Injectable()
export class ClienteService {

  constructor(private restApiService: RestApiService) {
  }

  getCustomers() {
    return this.restApiService.getPageable<Costumer>('cliente').pipe(map(response => response.content));
  }
  getCustomersByName(text) {
    return this.restApiService.getPageable<Costumer>('cliente', { nome: text}).pipe(map(response => response.content));
  }
}
