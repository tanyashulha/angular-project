import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AsynchronousValidatorComponent } from './asynchronous-validator/asynchronous-validator.component';
import { SynchronousValidatorComponent } from './synchronous-validator/synchronous-validator.component';
import { GroupValidatorComponent } from './group-validator/group-validator.component';
import { FormsListComponent } from './forms-list/forms-list.component';

const FORM_ROUTES: Routes = [
  {
    path: '',
    component: FormsListComponent,
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
      { path: '',
        component: FormsListComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(FORM_ROUTES),
  ],
  declarations: [
    AsynchronousValidatorComponent,
    SynchronousValidatorComponent,
    GroupValidatorComponent,
    FormsListComponent
  ],
  exports: [
    RouterModule
  ],
})

export class FormRoutingModule {}
