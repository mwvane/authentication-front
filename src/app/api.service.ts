import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return new Promise((res,rej) => {
      const payload = { username, password };
      this.http
        .post('https://localhost:7156/api/login', payload)
        .subscribe((data) => {
          res(data)
        });
    })
    
  }
  
  register(user: User) {
    this.http
      .post('https://localhost:7156/api/register', user)
      .subscribe((res) => {
        if(res){
          console.log(res)
          return res
        }
        return false
      });
  }
}
