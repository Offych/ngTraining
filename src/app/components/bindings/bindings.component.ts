import { Component } from '@angular/core';

@Component({
  selector: 'bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.scss']
})
export class BindingsComponent {
  
    inputtedText: string = '';
    twoWayInput: string = '';

    onInput(event: KeyboardEvent) {
      this.inputtedText = (<HTMLInputElement>event.target).value;
    }
}
