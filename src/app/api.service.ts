import { EnvironmentInjector, Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return new Promise((res, rej) => {
      const payload = { username, password };
      this.http
        .post('https://localhost:7156/api/login', payload)
        .subscribe((data) => {
          res(data);
        });
    });
  }

  register(user: User) {
    return new Promise((res, rej) => {
      this.http
        .post('https://localhost:7156/api/register', user)
        .subscribe((data) => {
          if (data) {
            console.log(data);
            res(data);
          }
        });
    });
  }
}
