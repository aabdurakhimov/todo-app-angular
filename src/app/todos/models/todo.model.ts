import { TodoType } from "./todo-type.enum";

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  type: TodoType;
}
