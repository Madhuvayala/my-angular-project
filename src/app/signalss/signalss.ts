import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signalss',
  imports: [],
  templateUrl: './signalss.html',
  styleUrl: './signalss.css',
})

export class Signalss {
  
  count=signal(0);
  val=20;
incriment(){
  console.log(this.count());
  this.count.update((c)=>c+1);

}
decriment(){
  console.log(this.count());
  this.count.update((c)=>c-1);
} 
reset(){
  this.count.set(0);
}
// signals dta type can be number,string,boolean,array,object

counts=signal<number>(0);
name=signal<string>('angular');
isLoading=signal<boolean>(true);
users=signal<string[]>(['madhu','raju','sai']);
user=signal<User>({name:'madhu',age:22});

setFunction(){
  this.users.set(['karthik','sai','raju']);
}
updateFunction(){
  this.users.update(use => [...use, 'new user']);
}
}
interface User{
  name:string;
  age:number;
}
