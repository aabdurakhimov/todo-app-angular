import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { nanoid } from 'nanoid';
import { BehaviorSubject, Observable } from 'rxjs';
import { TodoActions } from '../store/todo.actions';
import { TodoState } from '../store/todo.state';
import { TodoFormFields } from './add-edit-todo-dialog/types';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  public readonly title = 'Todo List';
  public isTodoDialogOpen = false;
  private editTodoSubject = new BehaviorSubject<Todo | null>(null);
  public editTodo$ = this.editTodoSubject.asObservable();

  @Select(TodoState.todos)
  public todos$!: Observable<Todo[]>;

  constructor(private store: Store) {}

  public openTodoDialog(): void {
    this.isTodoDialogOpen = true;
  }

  public addTodo(todo: TodoFormFields): void {
    const newTodo: Todo = {
      id: nanoid(),
      ...todo,
    };
    this.store
      .dispatch(new TodoActions.Add(newTodo))
      .subscribe(() => this.closeTodoDialog());
  }

  public editTodo(todo: Todo): void {
    console.log('editTodo', todo);

    this.store
      .dispatch(new TodoActions.Edit(todo))
      .subscribe(() => this.closeTodoDialog());
  }

  public editHandler(todo: Todo): void {
    console.log('editHandler', todo);

    this.editTodoSubject.next(todo);
    this.openTodoDialog();
  }

  public closeTodoDialog(): void {
    this.isTodoDialogOpen = false;
    this.editTodoSubject.next(null);
  }
}
