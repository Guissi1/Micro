import { Component } from '@angular/core';
import {AuthService} from "../Services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  user = {
    name: '',
    password: '',
    passwordConfirm: ''
  };

  login() {
    console.log('Login clicked:', this.user);
    this.authService.loginUser(this.user.name, this.user.password).subscribe({
      next: data => {
        console.log(data)
        this.authService.loadprofile(data);
        //this.router.navigateByUrl("/admin")
      }
    });
  }

}
