import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  currentUser:any
  ngOnInit(): void {
    this.currentUser = localStorage.getItem("currentUser")
    if (!this.currentUser) {
      this.router.navigateByUrl('login');
    }
    else{
      this.currentUser = JSON.parse(this.currentUser)
    }
  }
  onLogout(){
      localStorage.removeItem("currentUser")
      this.router.navigateByUrl("login")
  }
}
