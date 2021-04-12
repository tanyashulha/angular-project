import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleTextComponent } from './components/sample-text/sample-text.component';
import { HeaderComponent } from './components/header/header.component';
import { ChangeTextColorDirective } from './directives/change-text-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleTextComponent,
    HeaderComponent,
    ChangeTextColorDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
