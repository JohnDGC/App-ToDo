import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CreateTaskComponent } from "./createtask.component";
import { createtasksRoutes } from "./createtask.routing";

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    HttpClientModule,
    RouterModule.forChild(createtasksRoutes)],
})
export class CreateTaskModule {}
