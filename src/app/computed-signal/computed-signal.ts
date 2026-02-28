import { Component, signal ,computed} from '@angular/core';
import { Looping } from '../looping/looping';

@Component({
  selector: 'app-computed-signal',
  imports: [Looping],
  templateUrl: './computed-signal.html',
  styleUrl: './computed-signal.css',
})
export class ComputedSignal {
  titleCard='Computed Signal';
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

firstName=signal<string>('madhu');
lastName=signal<string>('vayala');
fullName=computed<string>(()=>this.firstName()+' '+this.lastName());

price=signal<number[]>([10,20,30,40,50]);
totalPrice=computed<number>(()=>this.price().reduce((a,b)=>a+b,0));
subTotal=computed<number>(()=>{return this.price().reduce((a, b) => a + b, 0);});
}
