import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class FormButtonComponent {

  data: string;

  /* data from parent */
  @Input() buttonLabel: String;
  /* data to parent */
  @Output() dataSent = new EventEmitter<string>();

  sendData() {
    this.dataSent.emit(this.data);
    this.data = "";
  }
}
