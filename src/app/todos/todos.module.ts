import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos.component';
import { AddEditTodoDialogComponent } from './add-edit-todo-dialog/add-edit-todo-dialog.component';
import { KendoModule } from '../shared/kendo.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosTableComponent } from './todos-table/todos-table.component';
import { DropdownlistFilterComponent } from '../shared/components/dropdownlist-filter/dropdownlist-filter.component';

@NgModule({
  declarations: [
    TodosComponent,
    AddEditTodoDialogComponent,
    TodosTableComponent,
    DropdownlistFilterComponent,
  ],
  imports: [BrowserAnimationsModule, KendoModule, ReactiveFormsModule],
  exports: [TodosComponent],
})
export class TodosModule {}
