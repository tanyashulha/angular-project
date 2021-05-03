import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesMainPageComponent } from './directives-main-page/directives-main-page.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { SampleTextComponent } from './sample-text/sample-text.component';
import { ChangeTextColorDirective } from '../../directives/change-text-color.directive';
import { ButtonToMainPageComponent } from './button-to-main-page/button-to-main-page.component';
import { DirectivesComponent } from './directives.component';
import { StructuralDirective } from '../../directives/ng-if-directive.directive';
import { NgForDirective } from './../../directives/ng-for-directive.directive';

const DIRECTIVES_ROUTES: Routes = [
  {
    path: '',
    component: DirectivesComponent,
    children: [
      {
        path: 'attribute-directive',
        component: SampleTextComponent
      },
      {
        path: 'structural-directive',
        component: StructuralDirectiveComponent
      },
      { path: '',
        component: DirectivesMainPageComponent
      }
    ]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(DIRECTIVES_ROUTES),
    CommonModule
  ],
  declarations: [
    DirectivesComponent,
    DirectivesMainPageComponent,
    SampleTextComponent,
    ChangeTextColorDirective,
    ButtonToMainPageComponent,
    StructuralDirectiveComponent,
    StructuralDirective,
    NgForDirective
  ],
  exports: [
    RouterModule
  ],
})

export class DirectivesRoutingModule {}
