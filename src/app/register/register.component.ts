import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userData = {
    firstName: '',
    lastName: '',
    Password: '',
    ConfirmPassword: '',
    EmailAddress:'',
    mobile:''

  }; 

  onSubmit(form:any) {
    if (form.valid) {
      console.log(form.value);
    }
  }
}
