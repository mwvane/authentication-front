import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CustomValidators } from '../customValidators';
import { Result } from '../result';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl(null),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    [CustomValidators.MatchValidator('password', 'confirmPassword')]
  );
  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }
  constructor(private apiService: ApiService, private router: Router) {}

  async onSubmit() {
    console.log(this.registerForm.value);
    const result = new Result(
      await this.apiService.register(this.registerForm.value)
    );
    if (result.res) {
      this.router.navigateByUrl('login');
    } else {
      alert(result.errors.join('\n'));
    }
  }
}
