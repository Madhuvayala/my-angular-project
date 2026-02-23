import { Component } from '@angular/core';

@Component({
  selector: 'app-functions',
  imports: [],
  templateUrl: './functions.html',
  styleUrl: './functions.css',
})
export class Functions {
count:number=0
incrimentop(value:any){
  console.log(value)
  if(this.count>=0){
        if(value==='plus'){
        this.count++
        } else if(value==='minus'){
          this.count--
        }else if(value ==='reset'){
          this.count=0
        }
  }else if(this.count<=0){
    this.count=0
  }
 
}

}
