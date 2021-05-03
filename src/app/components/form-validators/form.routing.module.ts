import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormValidatorsComponent } from './form-validators.component';
import { AsynchronousValidatorComponent } from './asynchronous-validator/asynchronous-validator.component';
import { SynchronousValidatorComponent } from './synchronous-validator/synchronous-validator.component';
import { GroupValidatorComponent } from './group-validator/group-validator.component';
import { FormsListComponent } from './forms-list/forms-list.component';
import { ValidatorComponent } from './validator/validator.component';

const FORM_ROUTES: Routes = [
  {
    path: '',
    component: FormValidatorsComponent,
    children: [
      {
        path: 'asyncronous-validator',
        component: AsynchronousValidatorComponent
      },
      {
        path: 'syncronous-validator',
        component: SynchronousValidatorComponent
      },
      {
        path: 'group-validator',
        component: GroupValidatorComponent
      },
      {
        path: 'validator',
        component: ValidatorComponent
      },
      { path: '',
        component: FormsListComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(FORM_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    FormValidatorsComponent,
    AsynchronousValidatorComponent,
    SynchronousValidatorComponent,
    GroupValidatorComponent,
    FormsListComponent,
    ValidatorComponent
  ],
  exports: [
    RouterModule
  ],
})

export class FormRoutingModule {}
