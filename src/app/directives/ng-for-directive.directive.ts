import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appNgForOf]'
})
export class NgForDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input('appNgForOf') set ngFor(array) {
    array.forEach(item => this.viewContainer.createEmbeddedView( this.templateRef, { $implicit: item } ));
  }
}
