import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private apiService: ApiService){

  }
  onSubmit(user: User) {
    this.apiService.register(user)
  }
}
