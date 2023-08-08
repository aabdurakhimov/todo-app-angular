import { State } from "@ngxs/store";
import { Todo } from "../todos/models/todo.model";

interface TodoStateModel {
  todos: Todo[];
}

@State<TodoStateModel>({
  name: "todo",
  defaults: {
    todos: []
  }
})
export class TodoState {

}

