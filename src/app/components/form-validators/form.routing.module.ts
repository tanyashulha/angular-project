import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormValidatorsComponent } from './form-validators.component';

const FORM_ROUTES: Routes = [
  {
    path: '',
    component: FormValidatorsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(FORM_ROUTES),
  ],
  exports: [
    RouterModule
  ],
})

export class FormRoutingModule {}
