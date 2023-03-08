import { HttpResponse } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { TodoDto } from "src/app/domain/entities/todo.dto";
import { ITodoRepository } from "src/app/domain/useCases/todo.repository";

@Component({
  selector: 'read-tasks',
  templateUrl: './readtask.component.html',
  styleUrls: ['./readtask.component.scss']
})
export class ReadTasksComponent implements OnInit {

  public tasks: Array<TodoDto> = [];
  public taskName: TodoDto;
  public find!: any;

  constructor(@Inject('ITodoRepository') private todoservice: ITodoRepository) { }

  ngOnInit(): void {
    this.readTasks()
  }

  readTasks(): void {
    console.log()
    this.todoservice.read().subscribe((response: HttpResponse<Array<TodoDto>>) => {
      if (response.status == 200) {
        this.tasks = response.body;
      }
    });
  }

 filter(find: any): void {
  this.find = find;
  console.log(find)
 }

  takeEventFromModal(event: any): void {
    if (event['status']) {
      let myForm: TodoDto = {
        createdAt: new Date(),
        description: event['description'],
        completed: false,
        updatedAt: 0,
        media: "",
      }
      console.log(myForm)

      this.todoservice.create(myForm).subscribe((response: HttpResponse<any>) => {
        if (response.status === 201)
          alert('Tarea creada exitosamente');

        this.readTasks();
      });
    }
  }

  onTaskSelected(task: TodoDto): void {
    this.taskName = task;
    console.log('Item ->', task);
  }

  updateEvent(event: any): void {
    console.log(this.taskName)

    let myForm: TodoDto = {
      createdAt: this.taskName.createdAt,
      description: event,
      completed: this.taskName.completed,
      updatedAt: this.taskName.updatedAt,
      media: this.taskName.media,
      id: this.taskName.id
    }
    // console.log(myForm)

    this.todoservice.update(myForm).subscribe((response: HttpResponse<any>) => {
      // const tempArr = this.tasks.filter(task => task.id !== myForm.id);
      // this.tasks = [...tempArr, event];
      // if (response.status === 201)
      //   alert('Tarea actualizada');
      alert('Tarea actualizada');
      this.readTasks();
    });
  }

  deleteEvent(id: string): void {
    console.log('id', id)

    if (confirm('¿Seguro que quieres eliminar la tarea?')) {

      this.todoservice.delete(id).subscribe((response: HttpResponse<string>) => {
        // const tempArr = this.tasks.filter(task => task.id !== id)
        // this.tasks = [...tempArr];
        if (response.status === 201)
          alert('Tarea eliminada');

        this.readTasks();
      });
    }
  }
}
