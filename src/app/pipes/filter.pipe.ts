import { Pipe, PipeTransform } from "@angular/core";
import { TodoService } from "../core/application/services/todo.service";
import { TodoDto } from "../domain/entities/todo.dto";

@Pipe({
  name: 'find',
})
export class FindPipe implements PipeTransform {

  transform(tasks: TodoDto[], arg: string): TodoDto[] {

    if(!arg || arg?.length < 3) return tasks;
    let result: any[] = [];

    for (const value of tasks) {
      if(value.description.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        result = [...result, value];
        console.log(result)
        // tasks.filter
      }
    }
    return result;
  }
}
