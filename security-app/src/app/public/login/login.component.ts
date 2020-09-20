import { SecurityService } from './../../services/security.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user= {
    userName:'',
    password: ''
  }

  constructor(private security: SecurityService) { }

  ngOnInit(): void {
  }

  onLogin(){

    this.security.login(this.user).subscribe(

      (res) => {
        localStorage.setItem('token', res.token);
      }
    )
  }

}
