import { Component, signal } from '@angular/core';
import {  } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css',
})
export class TwoWayDataBinding {
  // username: string = 'madhu';
  name=signal('madhu');

  user=signal<{name:string,age:number}>({
    name:'madhu',age:23
  });
  updateName(value:string){
    this.user.update(user=>({...user,name:value}))
  }
  updateAge(){
    this.user.update(user=>({...user,age:user.age+1}))
  }
}
