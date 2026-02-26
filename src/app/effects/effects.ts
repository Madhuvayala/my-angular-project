import { Component ,signal,effect} from '@angular/core';

@Component({
  selector: 'app-effects',
  imports: [],
  templateUrl: './effects.html',
  styleUrl: './effects.css',
})
export class Effects {
count=signal(0);
isDarkMode = signal(false);
// constructor() {  effect(() => {
//   console.log('isDarkMode:', this.isDarkMode());
//     if(this.isDarkMode()) {
//       document.body.style.backgroundColor = 'black';
//       document.body.style.color = 'white';
//     } else {
//       document.body.style.backgroundColor = 'white';
//       document.body.style.color = 'black';
//     }
//   });
// }
toggleButton(){
  this.isDarkMode.update((isDark) => !isDark);
}
incriment() {
  this.count.update((c) => c + 1);
}
message=signal('');
constructor() {  effect(() => {
  if(this.message()) {
    setTimeout(() => {
      this.message.set('');
    }, 4000);
    
  }
  });
}
showMessage() {
  this.message.set('Button Clicked!');
}



}
