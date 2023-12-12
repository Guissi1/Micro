import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: '',
    confirmPassword: '',
    userId: 0,
    email: '',
    country: '',
    phoneNumber: ''
  };
  loading: boolean = false;

  constructor(private auth: AuthService,private route : Router) { }

  onSubmit() {
    this.loading = true;
    if (this.user.password !== this.user.confirmPassword) {
      alert("Passwords do not match!");
      this.loading = false; // Reset the loading flag in case of error
      return;
    }
    this.auth.registerUser(this.user.username, this.user.password).subscribe(
      response => {
        alert('Registration successful!');
        this.loading = false;
        this.route.navigateByUrl("/login");
      },
      error => {
        alert('Registration failed. Please try again.');
        this.loading = false;
      }
    );
  }
}