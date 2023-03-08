import { CrudBase } from "src/app/core/application/contracts/todo.contracts";
import { TodoDto } from "../entities/todo.dto";

export interface ITodoRepository extends CrudBase<TodoDto> {

}
