import { Component, ViewChild  } from '@angular/core';
import { ChildComponent } from '../child/child.component';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
//@ViewChild(ChildComponent,{static: false}) child;
public someText = 'Here we go with some text';
  constructor() { }


  // toggleChild() {
  //   this.child.visible = !this.child.visible;
  // }
  // changeSomeText(){
  //   this.parentMessage="hello danish"
  // }
}
