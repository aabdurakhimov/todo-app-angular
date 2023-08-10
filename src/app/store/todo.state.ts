import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Todo } from '../todos/models/todo.model';
import { mockTodos } from '../todos/utils';
import { TodoActions } from './todo.actions';

export interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: mockTodos,
  },
})
@Injectable()
export class TodoState {
  @Selector()
  public static todos(state: TodoStateModel) {
    return state.todos;
  }

  @Action(TodoActions.Add)
  public add(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: TodoActions.Add
  ) {
    const state = getState();
    patchState({
      todos: [...state.todos, payload],
    });
  }

  @Action(TodoActions.Edit)
  public edit(
    { getState, patchState }: StateContext<TodoStateModel>,
    { payload }: TodoActions.Edit
  ) {
    const state = getState();
    const editedTodos = state.todos.map((item) =>
      item.id === payload.id ? payload : item
    );
    patchState({
      todos: editedTodos,
    });
  }

  @Action(TodoActions.Delete)
  public delete(
    { getState, patchState }: StateContext<TodoStateModel>,
    action: TodoActions.Delete
  ) {
    const state = getState();
    const filteredTodos = state.todos.filter((item) => item.id !== action.id);
    patchState({
      todos: filteredTodos,
    });
  }
}
