import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ConfirmPasswordValidator } from "../validators/confirm-password.validator";

@Component({
  selector: 'app-group-validator',
  templateUrl: './group-validator.component.html',
  styleUrls: ['../../../styles/form.style.css']
})
export class GroupValidatorComponent {
  form: FormGroup;

  error_messages = {
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length.' }
    ],
    'confirmPassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'CheckPasswords', message: 'Passwords must match' }
    ],
  }

  constructor(
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {
      validator: ConfirmPasswordValidator.CheckPasswords
    });
  }

  onReset() {
    this.form.reset();
  }
}
