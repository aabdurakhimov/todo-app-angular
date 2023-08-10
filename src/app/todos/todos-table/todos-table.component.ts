import { Component, EventEmitter, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoActions } from 'src/app/store/todo.actions';
import { TodoState } from 'src/app/store/todo.state';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.scss'],
})
export class TodosTableComponent {
  @Select(TodoState.todos)
  public todos$!: Observable<Todo[]>;

  @Output() public edit = new EventEmitter<Todo>();

  constructor(private store: Store) {}

  public handleRemove({ dataItem }: { dataItem: Todo }): void {
    this.store.dispatch(new TodoActions.Delete(dataItem.id));
  }

  public handleEdit({ dataItem }: { dataItem: Todo }): void {
    this.edit.emit(dataItem);
  }
}
