import { Todo } from "../todos/models/todo.model";

export namespace TodoActions {
  export class Add {
    static readonly type = '[Todo] Add';
    constructor(public payload: Todo) {}
  }

  export class Edit {
    static readonly type = '[Todo] Edit';
    constructor(public payload: Todo) {}
  }

  export class Delete {
    static readonly type = '[Todo] Delete';
    constructor(public id: string) {}
  }
}
