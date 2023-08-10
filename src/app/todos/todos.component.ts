import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { SVGIcon, plusIcon } from '@progress/kendo-svg-icons';
import { nanoid } from 'nanoid';
import { BehaviorSubject, Observable, first } from 'rxjs';
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
  public plusSVG: SVGIcon = plusIcon;

  private selectedTodoSubject = new BehaviorSubject<Todo | null>(null);
  public selectedTodo$ = this.selectedTodoSubject.asObservable();

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
      .pipe(first())
      .subscribe(() => this.closeTodoDialog());
  }

  public editTodo(todo: Todo): void {
    this.store
      .dispatch(new TodoActions.Edit(todo))
      .pipe(first())
      .subscribe(() => this.closeTodoDialog());
  }

  public handleTableEdit(todo: Todo): void {
    this.selectedTodoSubject.next(todo);
    this.openTodoDialog();
  }

  public closeTodoDialog(): void {
    this.isTodoDialogOpen = false;
    this.selectedTodoSubject.next(null);
  }
}
