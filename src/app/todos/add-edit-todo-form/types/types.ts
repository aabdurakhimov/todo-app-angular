import { FormControl, FormGroup } from '@angular/forms';
import { TodoType } from '../../models/todo-type.enum';

type ControlsOf<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<any, any>
    ? FormGroup<ControlsOf<T[K]>>
    : FormControl<T[K]>;
};

export interface TodoFormFields {
  title: string;
  description: string;
  type: TodoType;
}

export interface TodoFormModel extends FormGroup<ControlsOf<TodoFormFields>> {}
