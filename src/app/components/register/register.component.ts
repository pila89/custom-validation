import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { fullNameValidator } from 'src/app/validators/fullName.validator';
import { matchValidator } from 'src/app/validators/match.validator';

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
    this.registerForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required, fullNameValidator(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            RxwebValidators.password({
              validation: {
                maxLength: 10,
                minLength: 5,
                digit: true,
                specialCharacter: true,
              },
            }),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            RxwebValidators.password({
              validation: {
                maxLength: 10,
                minLength: 5,
                digit: true,
                specialCharacter: true,
              },
            }),
            // RxwebValidators.compare({ fieldName: 'password' }),
          ],
        ],
        termAccepted: [false, [Validators.requiredTrue]],
      },
      {
        validator: matchValidator('password', 'confirmPassword'),
      }
    );
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
