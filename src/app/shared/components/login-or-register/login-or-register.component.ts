import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 

  openForgot(): any {
  this.router.navigateByUrl("forgetpassword")
  }
}
