import { Component, signal, Signal } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private auth: Auth,private router: Router) {}
imageUrl:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEztWzkKFIsUSBZXPogyev7vXYjESPaYM-SQ&s'
isDisable:boolean=true;
userName:string='madhu';
isActive:boolean=true;
boxWidth=100
BGColor='red';
count=signal(0);
login(){
  this.auth.login();
  this.router.navigate(['/signal-deep']);
}
}
