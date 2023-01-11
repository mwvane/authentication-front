import { EnvironmentInjector, Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

const API_URL = process.env.NG_APP_API_URL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return new Promise((res, rej) => {
      const payload = { username, password };
      this.http
        .post(`${API_URL}/login`, payload)
        .subscribe((data) => {
          res(data);
        });
    });
  }

  register(user: User) {
    return new Promise((res, rej) => {
      this.http
        .post(`${API_URL}/register`, user)
        .subscribe((data) => {
          if (data) {
            console.log(data);
            res(data);
          }
        });
    });
  }
}
