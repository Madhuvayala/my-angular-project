import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder,ReactiveFormsModule } from '@angular/forms';
import{Card} from '../card/card';
import { Button } from '../button/button';
import { FormField } from '../form-field/form-field';

@Component({
  selector: 'app-form-with-signals',
  imports: [FormsModule, ReactiveFormsModule,CommonModule,Card,Button,FormField],
  templateUrl: './form-with-signals.html',
  styleUrl: './form-with-signals.css',
})
export class FormWithSignals {
  emails='';
name=signal('');
email=signal('')

submitForm(){   
  console.log(`Name: ${this.name()}, Email: ${this.email()}`);  
}
form:any;
userSignal=signal({name:'',email:''});
constructor(private fb:FormBuilder){
  this.form=this.fb.group({
    name:'',
    email:''
  });
  this.form.valueChanges.subscribe((value:any)=>{
    this.userSignal.set(value);
  })  ;
}
submitForms(){
  console.log(`Name: ${this.userSignal().name}, Email: ${this.userSignal().email}`);
}
// saveData(){
//   console.log('Data saved successfully!');
// }
message=''
onSave(msg:string){
  this.message=msg;
}
onEmailChage(value:string){
console.log('Email changed:', value);
this.emails=value;
}


}