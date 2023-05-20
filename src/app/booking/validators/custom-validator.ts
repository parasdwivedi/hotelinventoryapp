import { AbstractControl } from '@angular/forms';
import { Test } from '@nestjs/testing';

export class CustomValidator {
  static ValidateName(control: AbstractControl) {
    const value = control.value as string;
    if (value.includes('test')) {
      return { invalidName: true };
    }
    return null;
  }
}
