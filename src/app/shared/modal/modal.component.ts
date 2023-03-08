import { Component, EventEmitter, Input, Output } from "@angular/core";
import { TodoDto } from "src/app/domain/entities/todo.dto";

@Component({
  selector: "modal-create-task",
  templateUrl: "./modal.component.html",
})
export class ModalComponent {

  @Input() taskList: TodoDto[];
  @Input() selectionTask: any;

  @Output() sendEventToCreateTask = new EventEmitter<any>();
  @Output() sendEventToUpdateTask = new EventEmitter<any>();
  public taskName: string;

  sendEvent(): void {
    this.sendEventToCreateTask.emit({ description: this.taskName, status: true });
    this.taskName = '';
  }

  updateTask(selection: any): void {
    // console.log('item ->', selection);
    this.sendEventToUpdateTask.emit(selection);
    this.taskName = '';
  }

}
