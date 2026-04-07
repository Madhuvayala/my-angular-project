import { Component, Signal } from '@angular/core';
import { Chaild } from '../chaild/chaild';

@Component({
  selector: 'app-inputs-using-signals',
  imports: [Chaild],
  templateUrl: './inputs-using-signals.html',
  styleUrl: './inputs-using-signals.css',
})
export class InputsUsingSignals {
userName:string='vayala madhu';
titles:string='madhu';
subjectName:string='Angular';
subject:string='';
message:string='';

selectedTrigger:string='';
onMassage(event:string){
  this.subjectName=event; 
}
onMassages(event:string){
  this.subject=event; 
}
onTrigger(event:string){
  this.selectedTrigger=event;     
}

}
