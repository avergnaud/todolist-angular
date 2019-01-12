import { Component, Input, Output, EventEmitter } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  /* data from parent */
  @Input() id: number;
  @Input() title: String;
  /* data to parent */
  @Output() itemRemoved = new EventEmitter<number>();

  removeItem(id:number) {
    this.itemRemoved.emit(id);
  }
}
