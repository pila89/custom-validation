import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fullNameValidator(n: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const v: string = control.value.trim();
    const nbMots = v.split(' ').length;

    if (nbMots < n) {
      return {
        fullNameError: true,
        requiredValue: n,
      };
    }
    return null;
  };
}
