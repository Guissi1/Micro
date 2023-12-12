import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8070/user';

  constructor(private http: HttpClient) { }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${userId}`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/list-users`);
  }

  getUserInfo(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/info`);
  }

  upgradeUserToAdmin(username: string): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/upgrade/${username}`, null);
  }

  updateUserProfile(
    username: string,
    email: string,
    phoneNumber: string,
    country: string,
    image: File | null
  ): Observable<void> {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('country', country);
    if (image) {
      formData.append('image', image, image.name);
    }

    return this.http.put<void>(`${this.baseUrl}/update`, formData);
  }

  deleteUserAccount(): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteMyAccount`);
  }
}


