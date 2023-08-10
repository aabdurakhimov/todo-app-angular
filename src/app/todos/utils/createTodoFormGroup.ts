import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { TodoFormFields } from '../add-edit-todo-dialog/types';
import { defaultTodo } from './defaultTodo';

export const createTodoFormGroup = (
  fb: NonNullableFormBuilder,
  todo: TodoFormFields = defaultTodo
) => {
  return fb.group({
    title: [todo.title, Validators.required],
    description: [todo.description],
    type: [todo.type, Validators.required],
    completed: [todo.completed],
  });
};
