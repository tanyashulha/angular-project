import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {

  static CheckPasswords(abstractControl: AbstractControl) {
    let password = abstractControl.get('password').value;
    let confirmPassword = abstractControl.get('confirmPassword').value;

     if (password != confirmPassword) {
      abstractControl.get('confirmPassword').setErrors({
        CheckPasswords: true
      })
    } else {
      abstractControl.get('confirmPassword').setErrors({
        CheckPasswords: null
      })
    }
  }

}
