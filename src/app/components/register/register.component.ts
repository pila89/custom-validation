import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fullNameValidator } from 'src/app/validators/fullName.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm?: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required,fullNameValidator(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false, [Validators.requiredTrue]],
    });
  }

  onRegister(): void {
    this.submitted = true;
    if (this.registerForm?.invalid) {
      return;
    }

    const data = this.registerForm?.value;
    console.log(data);

    // reset form
    this.registerForm?.reset();
    this.submitted = false;
  }
}
