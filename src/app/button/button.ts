import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  lable=input<string>();
  clicked=output<string>();
  onClick(){
    console.log('card button clicked by the chaild component');
    this.clicked.emit('button clicked Successfully');
  }
   
}
