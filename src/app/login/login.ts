import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
imageUrl:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEztWzkKFIsUSBZXPogyev7vXYjESPaYM-SQ&s'
isDisable:boolean=true;
userName:string='madhu';
isActive:boolean=true;
boxWidth=100
BGColor='red';
count=signal(0);
}
