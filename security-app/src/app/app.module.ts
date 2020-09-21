import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { ClientesComponent } from './private/clientes/clientes.component';
import { EmpleadosComponent } from './private/empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientesComponent,
    EmpleadosComponent,
    ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
