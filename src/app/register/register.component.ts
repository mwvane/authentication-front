import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private apiService: ApiService, private router: Router){

  }
  async onSubmit(user: User) {
    const result = await this.apiService.register(user)
    if(result){
      this.router.navigateByUrl("login")
    }
  }
}
