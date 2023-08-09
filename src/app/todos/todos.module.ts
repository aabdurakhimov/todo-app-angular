import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos.component';
import { AddEditTodoFormComponent } from './add-edit-todo-form/add-edit-todo-form.component';
import { KendoModule } from '../shared/kendo.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent, AddEditTodoFormComponent],
  imports: [BrowserAnimationsModule, KendoModule, ReactiveFormsModule],
  exports: [TodosComponent],
})
export class TodosModule {}
