import { Directive,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appParent]'
})
export class ParentDirective {

  constructor(private el:ElementRef,
              private renderer:Renderer) { 
                renderer.setElementStyle(el.nativeElement,'color','white')
              }

}
