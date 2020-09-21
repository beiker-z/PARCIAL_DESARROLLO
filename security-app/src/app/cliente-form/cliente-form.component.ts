import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  constructor(private router:Router) { }

  onGuardar(){
    this.router.navigate(['clientes']);
  }
  onCancelar(){
    this.router.navigate(['clientes']);
  }
  onEliminar(){
    this.router.navigate(['clientes']);
  }
  ngOnInit(): void {
  }

}
