import { Component, EventEmitter, Output } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { CellClickEvent, CellCloseEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { TodoActions } from 'src/app/store/todo.actions';
import { TodoState } from 'src/app/store/todo.state';
import { Todo } from '../models/todo.model';
import { createTodoFormGroup, todoStatuses, todoTypes } from '../utils';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.scss'],
})
export class TodosTableComponent {
  @Select(TodoState.todos)
  public todos$!: Observable<Todo[]>;

  @Output() public edit = new EventEmitter<Todo>();

  public todoTypes = todoTypes;
  public todoStatuses = todoStatuses;

  constructor(private store: Store, private fb: NonNullableFormBuilder) {}

  public handleCellClick(args: CellClickEvent): void {
    if (!args.isEdited) {
      args.sender.editCell(
        args.rowIndex,
        args.columnIndex,
        createTodoFormGroup(this.fb, args.dataItem)
      );
    }
  }

  public handleCellClose(args: CellCloseEvent): void {
    const { formGroup, dataItem } = args;
    if (!formGroup.valid) {
      args.preventDefault();
    } else if (formGroup.dirty) {
      const editedTodo: Todo = {
        id: dataItem.id,
        ...formGroup.value,
      };
      this.store.dispatch(new TodoActions.Edit(editedTodo));
    }
  }

  public handleRemove({ dataItem }: { dataItem: Todo }): void {
    this.store.dispatch(new TodoActions.Delete(dataItem.id));
  }

  public handleEdit({ dataItem }: { dataItem: Todo }): void {
    this.edit.emit(dataItem);
  }
}
