import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function createEmptyStringValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value as string;
    if (value && value.trim().length === 0) {
      return { emptyString: true };
    }
    return null;
  };
}
