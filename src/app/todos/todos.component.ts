import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.model';
import { TodoState } from '../store/todo.state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Select(TodoState.todos)
  public todos$!: Observable<Todo[]>;
}
