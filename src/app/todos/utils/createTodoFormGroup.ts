import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { TodoFormFields } from '../add-edit-todo-dialog/types';
import { defaultTodo } from './defaultTodo';
import { createEmptyStringValidator } from 'src/app/shared/utils';

export const createTodoFormGroup = (
  fb: NonNullableFormBuilder,
  todo: TodoFormFields = defaultTodo
) => {
  return fb.group({
    title: [todo.title, [Validators.required, createEmptyStringValidator()]],
    description: [todo.description],
    type: [todo.type, Validators.required],
    completed: [todo.completed],
  });
};
