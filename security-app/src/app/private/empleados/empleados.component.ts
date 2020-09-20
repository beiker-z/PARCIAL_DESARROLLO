import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { empleado } from './../../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  private URL = "http://localhost:3000/";

  constructor(private httpClient:HttpClient) { }

getempleados(){
  return this.httpClient.get<empleado[]>(this.URL+'empleados');
}

  ngOnInit(): void {
  }

}
