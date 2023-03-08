import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { TodoDto } from "src/app/domain/entities/todo.dto";

@Component({
  selector: "task-list",
  templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit, OnChanges {

  public selected: TodoDto;
  public find: any;
  @Input() taskList: TodoDto[];
  @Input() selection!: string;
  @Input() task!: any;

  @Output() getFind = new EventEmitter<any>();
  @Output() sendEventTask = new EventEmitter<any>();
  @Output() sendEventToEditTask = new EventEmitter<any>();
  @Output() taskDeleteEvent = new EventEmitter<string>();


  ngOnInit(): void {
    this.getFind.emit(this.find);
   }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskList'].currentValue)
      this.taskList = changes['taskList'].currentValue;
  }

  // filtrado() {
  //   this.getFind.emit(this.find);
  // }

  openForEdit(task: any): void {
    this.sendEventTask.emit(task)
  }

  deleteTask(id: string): void {
    this.taskDeleteEvent.emit(id);
  }

  taskSelected(task: TodoDto): void {
    console.log('Task ->', task);
    this.selected = task;
  }
}
