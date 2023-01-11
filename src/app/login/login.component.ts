import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private apiService: ApiService, private router: Router) {}
  async onSubmit() {
    const user = await this.apiService.login(this.username, this.password);
    if(user != null){
      localStorage.setItem("currentUser",JSON.stringify(user))
      this.router.navigateByUrl("home")
    }
    else{
      alert("invalid username or password!")
    }
  }
}
