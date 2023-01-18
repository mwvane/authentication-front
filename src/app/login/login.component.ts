import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Result } from '../result';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });
  constructor(private apiService: ApiService, private router: Router) {}

  async onSubmit() {
    const result = new Result(
      await this.apiService.login(
        this.loginForm.value.username,
        this.loginForm.value.password
      )
    );
    if (result.res) {
      localStorage.setItem('currentUser', JSON.stringify(result.res));
      this.router.navigateByUrl('home');
    } else {
      alert(result.errors.join('\n'));
    }
  }
}
