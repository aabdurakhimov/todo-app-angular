import { TodoType } from "./todo-type.enum";

export interface Todo {
  title: string;
  description: string;
  completed: boolean;
  type: TodoType;
}
