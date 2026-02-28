import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-looping',
  imports: [],
  templateUrl: './looping.html',
  styleUrl: './looping.css',
})
export class Looping {
@Input() chaildStore:any;
@Input() chaildStore1:any;
items: string[] = ['apple', 'banana', 'dates', 'goa'];
subject: string[] = ['html', 'css', 'javascript', 'java', 'angular'];
users = [
  {name:'John',age:30,city:'New York'},
  {name:'Jane',age:25,city:'Los Angeles'},
  {name:'Bob',age:35,city:'Chicago'}
]
deleteItem(i: number) {
  console.log('Deleting item at index:', i);
  this.items.splice(i, 1);
}

numbers=[10,15,20,17,19,25,30]
}
