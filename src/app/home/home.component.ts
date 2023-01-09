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
  ngOnInit(): void {
    if (!this.apiService.isLoggedin()) {
      this.router.navigateByUrl('login');
    }
  }
}
