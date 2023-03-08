import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.scss']
})
export class CreateTaskComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  onCreateTask(item: string): void {
    console.log('Item ->', item)
    this.newItemEvent.emit(item);
  }
}
