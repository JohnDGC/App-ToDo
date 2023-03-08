import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./notfound/notfound.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./modal/modal.component";
import { FormsModule } from "@angular/forms";
import { FindPipe } from "../pipes/filter.pipe";

@NgModule({
  declarations: [NotFoundComponent, ListComponent, ModalComponent, FindPipe],
  imports: [CommonModule, FormsModule],
  exports: [NotFoundComponent, ListComponent, ModalComponent, FindPipe]
})
export class SharedModule{ }
