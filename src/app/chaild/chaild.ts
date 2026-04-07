import { Component,EventEmitter,input,Input, Output, signal} from '@angular/core';

@Component({
  selector: 'app-chaild',
  imports: [],
  templateUrl: './chaild.html',
  styleUrl: './chaild.css',
})
export class Chaild {
@Input() title:any;//parent to chaild data pass
name=input<string>();//parent to chaild data pass through signal function 
@Output() chaildPassData= new EventEmitter<any>;//chaild to parent data pass
@Output() subjectData= new EventEmitter<string>();//chaild to parent data pass
@Output() trigger= new EventEmitter<string>();//chaild to parent data pass
signalMassage=signal('hello parent');
updatesMassage(){
  this.signalMassage.set('updated from child component');
}
sendToParent(){
  this.subjectData.emit('java script');
}
isClick(){
  this.chaildPassData.emit('data from chaild');
  this.trigger.emit('trigger from chaild');
}

}


