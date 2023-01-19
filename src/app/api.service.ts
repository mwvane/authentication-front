import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './result';

const API_URL = process.env.NG_APP_API_URL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return new Promise((res, rej) => {
      const payload = { username, password };
      this.http.post(`${API_URL}/login`, payload).subscribe((data) => {
        console.log(data);
        res(data);
      });
    });
  }

  register(user: object) {
    return new Promise((res, rej) => {
      this.http.post(`${API_URL}/register`, user).subscribe((data) => {
        console.log(data);
        if (data) {
          console.log(data);
          res(data);
        }
      });
    });
  }
  isUsernameExists(username: any){
    return new Promise((res, rej) => {
      this.http.get(`${API_URL}/getUser?username=${username}`).subscribe((data) => {
        if (data) {
          console.log(data);
          res(data);
        }
      });
    });
  }
  updatePassword(id: string, password: string) {
    const payload = { id, password };
    return new Promise((res, rej) => {
      this.http.post(`${API_URL}/updatePassword`, payload).subscribe((data) => {
        console.log(data);
        res(data);
      });
    });
  }
}
