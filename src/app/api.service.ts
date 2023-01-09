import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  currentUser: any
  isLoggedin(){
    return this.currentUser ? true : false
  }
}
