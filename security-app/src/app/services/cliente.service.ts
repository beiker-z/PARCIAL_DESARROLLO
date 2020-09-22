import { HttpClient } from '@angular/common/http';
import { cliente } from './../models/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  clientes: cliente[] = [
    new cliente(1, "Juan Pérez", "ciudad1", "1234", "9097-17-18870"),
    new cliente(1, "Juan Pérez", "ciudad1", "1234", "9097-17-18870"),
    new cliente(1, "Juan Pérez", "ciudad1", "1234", "9097-17-18870")
  ]

  saveclietes(cliente: cliente) {
    cliente.id = this.clientes.length;

    this.clientes.push(cliente);
  }
  constructor(private httpClient: HttpClient) { }

  getclioentes() {
    return this.clientes;
  }

  getclientes(id: number) {
    id = id - 1;
    return this.clientes[id];
  }

  updateclientes(id: number, cliente: cliente) {

    this.clientes[id] = cliente;
  }

  deletedclientes(id: number) {
    this.clientes.splice(id, 1);
  }

}
