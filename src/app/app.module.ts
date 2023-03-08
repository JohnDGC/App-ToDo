import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FindPipe } from './pipes/filter.pipe';
import { CreateTaskComponent } from './ui/createtask/createtask.component';
import { ReadTasksComponent } from './ui/readtask/readtask.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
