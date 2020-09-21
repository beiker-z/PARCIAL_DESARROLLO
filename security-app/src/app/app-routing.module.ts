import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clientes', component: ClientesComponent,canActivate:[AuthGuard] },
  { path: 'clientes/add', component: ClienteFormComponent,canActivate:[AuthGuard] },
  { path: 'clientes/:id', component: ClienteFormComponent,canActivate:[AuthGuard] },
  { path: 'empleados', component: EmpleadosComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
