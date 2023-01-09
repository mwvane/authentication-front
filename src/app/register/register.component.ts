import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname:string = ""
  lastname:string = ""
  email:string = ""
  password:string = ""
  confirmPassword:string = ""
  onSubmit(){
    console.log(this.firstname)
  }
}
