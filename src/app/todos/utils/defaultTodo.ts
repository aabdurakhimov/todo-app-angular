import { TodoType } from '../models/todo-type.enum';

export const defaultTodo = {
  title: '',
  description: '',
  type: TodoType.PERSONAL,
  completed: false,
};
