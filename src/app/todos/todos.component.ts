import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { nanoid } from 'nanoid';
import { Observable } from 'rxjs';
import { TodoActions } from '../store/todo.actions';
import { TodoState } from '../store/todo.state';
import { TodoFormFields } from './add-edit-todo-form/types';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  public readonly title = 'Todo List';
  public isOpen = false;

  @Select(TodoState.todos)
  public todos$!: Observable<Todo[]>;

  constructor(private store: Store) {}

  public openTodoDialog(): void {
    this.isOpen = true;
    console.log('add todo');
  }

  public addTodo(todo: TodoFormFields): void {
    console.log('add todo', todo);
    const newTodo: Todo = {
      id: nanoid(),
      completed: false,
      ...todo,
    };
    this.store
      .dispatch(new TodoActions.Add(newTodo))
      .subscribe(() => this.close());
  }

  public close(): void {
    this.isOpen = false;
  }
}
