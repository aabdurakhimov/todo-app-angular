import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { TodoType } from '../models/todo-type.enum';
import { Todo } from '../models/todo.model';
import { TodoFormFields, TodoFormModel } from './types';

@Component({
  selector: 'add-edit-todo-form',
  templateUrl: './add-edit-todo-form.component.html',
  styleUrls: ['./add-edit-todo-form.component.scss'],
})
export class AddEditTodoFormComponent {
  @Input() initialTodo: Todo | undefined;

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<TodoFormFields>();

  public todoTypes = Object.values(TodoType);

  public todoForm: TodoFormModel = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    type: [TodoType.PERSONAL, Validators.required],
  });

  constructor(private fb: NonNullableFormBuilder) {}

  public clearForm(): void {
    this.todoForm.reset();
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public onSave(): void {
    this.save.emit(this.todoForm.getRawValue());
  }
}
