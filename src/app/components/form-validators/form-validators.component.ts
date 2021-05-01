import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.component.html',
  styleUrls: ['./form-validators.component.css']
})
export class FormValidatorsComponent implements OnInit {
  form: FormGroup;
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.maxLength(20)],
      lastName: ['', Validators.required, Validators.maxLength(20)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  onSubmit() {
    this.isSubmit = true;

    if (this.form.invalid) {
      return;
    }
  }

  onReset() {
    this.isSubmit = false;
    this.form.reset();
  }
}
