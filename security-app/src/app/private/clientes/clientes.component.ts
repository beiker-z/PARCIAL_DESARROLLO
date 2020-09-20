import { cliente } from './../../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  private URL = "http://localhost:3000/";
  constructor(private httpClient:HttpClient) { }

  getclientes(){

    return this.httpClient.get<cliente[]>(this.URL+'clientes');
  }

  ngOnInit(): void {
  }

}
