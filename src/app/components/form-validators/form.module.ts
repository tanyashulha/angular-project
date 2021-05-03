import { FormRoutingModule } from './form.routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormRoutingModule
  ],
})
export class FormModule { }
