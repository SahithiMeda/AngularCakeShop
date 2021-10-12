import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomHighlight]'
})
export class ZoomHighlightDirective {

  constructor(private element : ElementRef) { 
    console.log(element)
  }
  @HostListener('mouseenter') doingSomething(){
    this.element.nativeElement.classList.add("zoom1")
  }

  @HostListener('mouseleave') doSomethingelse(){
   this.element.nativeElement.classList.remove("zoom1")

  }

}
