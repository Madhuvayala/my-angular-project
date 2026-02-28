import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-chaild',
  imports: [],
  templateUrl: './chaild.html',
  styleUrl: './chaild.css',
})
export class Chaild {
@Input() title:any;
@Output() chaildPassData= new EventEmitter<any>;
isClick(){
  this.chaildPassData.emit('data from chaild');
}
}
