import { Component, signal ,computed} from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {
count=signal<number>(2);
doubleCount=computed(()=>this.count()*2);
tripleCount=computed(()=>this.count()*3);
incriment(){
  console.log(this.count());
  this.count.update((c)=>c+1);
}
inc(){
  this.count.set(this.count()+1);
}
}
