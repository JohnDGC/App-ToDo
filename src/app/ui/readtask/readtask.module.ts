import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoService } from "src/app/core/application/services/todo.service";
import { readTaskRoutes } from "./readtask.routing";
import { ReadTasksComponent } from "./readtask.component";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ReadTasksComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild(readTaskRoutes)],
  providers: [
    { provide: 'ITodoRepository', useClass: TodoService }
  ]
})
export class ReadTaskModule {

}
