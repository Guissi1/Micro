import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from "jwt-decode";
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  roles: any;
  username: any;
  accessToken!: any;
  id: any;


  private baseUrl = 'http://localhost:8070/user/auth'; // Replace with your server URL

  constructor(private http: HttpClient, private route: Router) {
    this.loadAuthenticationState();
  }
  loadAuthenticationState() {
    const storedToken = localStorage.getItem('jwt');

    if (storedToken) {
      this.isAuthenticated = true;
      this.accessToken = storedToken;
      let decodedJwt: any = jwtDecode(this.accessToken);
      this.username = decodedJwt.sub;
      this.id = decodedJwt.userId;
      this.roles = decodedJwt.roles;
      this.redirectBasedOnRoles();
    }
  }

  registerUser(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/register`, body, { responseType: 'text' });
  }

  loginUser(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }
  loadprofile(data: any) {
    this.isAuthenticated = true;
    this.accessToken = data['jwt'];
    localStorage.setItem('jwt',this.accessToken)
    let decodedJwt: any = jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.id = decodedJwt.id;
    this.roles = decodedJwt.roles;
    localStorage.setItem('username', this.username);
    localStorage.setItem('id', this.id);
    console.log(this.id);
    console.log(this.roles);
    this.route.navigateByUrl("/blog/blog"); 
    //this.redirectBasedOnRoles();
  }
  private redirectBasedOnRoles() {
    if (this.roles.includes("SUPER-ADMIN")) {
      this.route.navigateByUrl("/super-admin/home"); // Navigate to admin's home
    } else if (this.roles.includes("USER")) {
      this.route.navigateByUrl("/user/home"); // Navigate to user's home
    } else if (this.roles.includes("ADMIN")) {
      this.route.navigateByUrl("/admin/home"); // Navigate to user's home
    } else if (this.roles.includes("ORGANIZER")) {
      this.route.navigateByUrl("/organizer/home"); // Navigate to user's home
    } else {
      this.route.navigateByUrl("/guest"); // Navigate to a default route (for other roles)
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.accessToken = "";
    this.username = "";
    this.roles = "";
    localStorage.removeItem('jwt'); // Remove the JWT token from local storage
    this.route.navigateByUrl('/login'); // Redirect to the login page
  }
}
