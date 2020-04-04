import { Directive, HostBinding, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector:"[appDropDown]"
})
export class DropDownDirective {
  @HostBinding('class.show') openClass= false;
  @HostListener('click')
  OnClick() {
    this.openClass = !this.openClass;
    //this.renderer.addClass(this.eleRef.nativeElement, "open");
  }

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
  }
}
