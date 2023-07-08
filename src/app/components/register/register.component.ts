import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  // Tutorial Link 1: https://jasonwatmore.com/post/2018/11/10/angular-7-template-driven-forms-validation-example
  // Tutorial Link 2: https://timdeschryver.dev/blog/a-practical-guide-to-angular-template-driven-forms#custom-validators
  // Tutorial Link 3: https://www.bezkoder.com/angular-14-template-driven-form-validation/

  public fullName?: string = '';
  public email?: string = '';
  public password?: string = '';
  public confirmPassword?: string = '';
  public termAccepted?: any;
  public submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRegister(form: any): void {
    // event.preventDefault();
    this.submitted = true;
    if(form.invalid){
      return;
    }
    // console.log(`form data : ${JSON.stringify(form.value)}`)

    // call rest API using service
    const data = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    console.log(data)

    // reset form
    this.fullName = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.submitted= false;
  }
}
