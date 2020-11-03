import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    userName: '',
    password: ''
  }

  res;
  constructor(private security: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onLogin() {
    try {
      this.res = await this.security.login(this.user).toPromise();
      localStorage.setItem('token', this.res.token);
      this.router.navigate(['clientes']);

    } catch (error) {
      console.error(error);
    }

  }

}
