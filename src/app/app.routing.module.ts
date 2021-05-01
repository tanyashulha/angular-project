import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {
        path: 'directives',
        loadChildren: () => import('./components/directives-component/directives.module').then(m => m.DirectivesModule),
      },
      {
        path: 'form-validators',
        loadChildren: () => import('./components/form-validators/form.module').then(m => m.FormModule)
      },
      { path: '**', redirectTo: 'directives' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}
