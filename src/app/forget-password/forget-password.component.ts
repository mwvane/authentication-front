import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CustomValidators } from '../customValidators';
import { Result } from '../result';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  userId: any = 0
  constructor(private service: ApiService, private router: Router){

  }

  checkEmailForm = new FormGroup({
    username: new FormControl(null, [Validators.email]),
  });

  forgetPasswordForm = new FormGroup(
    {
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
      this.forgetPasswordForm.getError('mismatch') &&
      this.forgetPasswordForm.get('confirmPassword')?.touched
    );
  }
  async onCheckUsername() {
    const result = new Result(await this.service.isUsernameExists(this.checkEmailForm.value.username))
    debugger
    if(result.res != null){
      this.userId = result.res;
    }
    else{
      alert(result.errors.join('\\n'))
    }
  }

  async onUpdatePassword(id:any) {
    debugger
    const response = await this.service.updatePassword(String(id),String(this.forgetPasswordForm.value.password))
    if(response){
      alert("Password sucessfully changed!")
      this.router.navigateByUrl("login");
    }
  }
}
