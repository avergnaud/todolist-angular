import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent {

  todos : Map<number, Todo> = new Map<number, Todo>();
  counter: number = 0;
  
  /* data from child */
  dataFromChild: String;
  
  eventFromChild(data) {
    this.dataFromChild = data;
    let index = this.counter++;
    let todo: Todo = new Todo(index, data);
    this.todos.set(index, todo);
  }
  
  handleItemRemoved(index) {
    this.todos.delete(index);
  }
}
