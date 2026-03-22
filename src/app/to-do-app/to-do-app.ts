import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  imports: [],
  templateUrl: './to-do-app.html',
  styleUrl: './to-do-app.css',
})
export class ToDoApp {
  newTodo=signal('');
  toDos=signal<{text:string;done:boolean}[]>([]);

  addToDo() {
    console.log('Change Todo:', this.newTodo());
    const text = this.newTodo().trim();
    if(text===''){
      return;
    }
    this.toDos.update(list=>[...list,{ text,done:false }]);
    this.newTodo.set('');
  }
  toggleTodo(index:number){
    this.toDos.update(list=>
      list.map((item,i)=>
        i===index?{...item,done:!item.done}:item)
    );
  }
  deleteTodo(index:number){
    this.toDos.update(list=>list.filter((_,i)=>i!==index));
  }
}
