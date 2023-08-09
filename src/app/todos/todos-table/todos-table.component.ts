import { Component, EventEmitter, Output } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoState } from 'src/app/store/todo.state';
import { Todo } from '../models/todo.model';
import { TodoActions } from 'src/app/store/todo.actions';

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

  public removeHandler({ dataItem }: { dataItem: Todo }): void {
    this.store.dispatch(new TodoActions.Delete(dataItem.id));
  }

  public editHandler({ dataItem }: { dataItem: Todo }): void {
    this.edit.emit(dataItem);
  }
}
