import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(
  firstFieldName: string,
  secondFieldName: string
): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const firstField = formGroup?.get(firstFieldName);
    const secondField = formGroup?.get(secondFieldName);

    if (!firstField?.value || !secondField?.value ||secondField.errors) {
      return null;
    }

    if (firstField?.value !== secondField?.value) {
      return {
        passwordMatchError: true,
      };
    }
    return null;
  };
}
