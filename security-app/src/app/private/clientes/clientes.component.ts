import { ClienteService } from './../../services/cliente.service';
import { cliente } from './../../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private URL = "http://localhost:3000/";
  constructor(private httpClient: HttpClient, private router: Router, private services: ClienteService) { }

  clien: cliente[] = [];

  ngOnInit(): void {



  }

  getclientes() {

    return this.httpClient.get<cliente[]>(this.URL + 'clientes');
  }

  onAgregar() {
    this.router.navigate(['clientes/add']);
  }



}
