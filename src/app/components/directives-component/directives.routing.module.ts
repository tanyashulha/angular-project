import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { DirectivesMainPageComponent } from './directives-main-page/directives-main-page.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { SampleTextComponent } from './sample-text/sample-text.component';
import { ChangeTextColorDirective } from '../../directives/change-text-color.directive';
import { ButtonToMainPageComponent } from './button-to-main-page/button-to-main-page.component';
import { DirectivesComponent } from './directives.component';

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
  ],
  declarations: [
    DirectivesComponent,
    DirectivesMainPageComponent,
    SampleTextComponent,
    ChangeTextColorDirective,
    ButtonToMainPageComponent,
    StructuralDirectiveComponent
  ],
  exports: [
    RouterModule
  ],
})

export class DirectivesRoutingModule {}
