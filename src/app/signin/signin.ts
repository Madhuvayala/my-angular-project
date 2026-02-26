import { Component } from "@angular/core";

@Component({
    selector:'app-signin',
    templateUrl:'./signin.html',
    styleUrl:'./signin.css'
   
})
export class SigninComponent{
title='signIn'
showBox:boolean=true;
marks:any=50;
toggleBox(){
    this.showBox=!this.showBox;
    console.log(this.showBox)
}
age=0
updatedAge(value:string){
this.age=Number(value)
}
status:string='active';
//switch
color:string='red';

tab:any='Home';


category:any='';
updateCategory(value:string){
    this.category=value.toLocaleLowerCase();
}

}