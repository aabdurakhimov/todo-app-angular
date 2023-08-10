import { TodoType } from '../models/todo-type.enum';
import { Todo } from '../models/todo.model';

export const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'First todo',
    description: 'This is the first todo',
    completed: false,
    type: TodoType.PERSONAL,
  },
  {
    id: '2',
    title: 'Second todo',
    description: 'This is the second todo',
    completed: false,
    type: TodoType.WORK,
  },
  {
    id: '3',
    title: 'Go shopping',
    description: 'Buy groceries and supplies',
    completed: true,
    type: TodoType.SHOPPING,
  },
  // Add more mock todos as needed
];
