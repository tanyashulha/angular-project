import { FormValidatorsComponent } from './form-validators.component';
import { FormRoutingModule } from './form.routing.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormValidatorsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormRoutingModule
  ],
})
export class FormModule { }
