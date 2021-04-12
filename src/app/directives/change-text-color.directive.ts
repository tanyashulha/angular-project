import {  Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangeTextColor]'
})
export class ChangeTextColorDirective {

  @Input('appChangeTextColor') color: boolean;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onHover() {
    this.changeColor();
  }

  @HostListener('click') onClick() {
    this.changeColor();
  }

  private changeColor() {
    this.el.nativeElement.style.color = `rgb(${this.getColor(0, 255)}, ${this.getColor(0, 255)}, ${this.getColor(0, 255)})`;
  }

  private getColor(min: number, max: number) {
    return  Math.ceil(Math.random() * (max - min) + min);
  }

  ngOnChanges(){
    this.el.nativeElement.style.color = this.changeColor();
  }
}
