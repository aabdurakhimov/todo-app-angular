import { Todo } from '../../models/todo.model';

export interface TodoFormFields extends Omit<Todo, 'id'> {}
