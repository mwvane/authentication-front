import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  currentUser: any;
  isLoggedin() {
    return this.currentUser ? true : false;
    // return true
  }
  login(username: string, password: string) {
    const payload = { username, password };
    const headers = { 'content-type': 'application/json' };
    this.http
      .post('https://localhost:7156/api/login', payload)
      .subscribe((res) => console.log(res));
  }
  register(user: User) {}
}
