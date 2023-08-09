import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { TodoType } from '../models/todo-type.enum';
import { Todo } from '../models/todo.model';
import { TodoFormFields } from './types';

@Component({
  selector: 'add-edit-todo-dialog',
  templateUrl: './add-edit-todo-dialog.component.html',
  styleUrls: ['./add-edit-todo-dialog.component.scss'],
})
export class AddEditTodoDialogComponent {
  @Input() public isOpen = false;
  @Input() public set value(todo: Todo | null) {
    console.log('todo', todo);
    this._value = todo;
    if (todo) {
      this.isNew = false;
      this.todoForm.patchValue(todo);
    } else {
      this.isNew = true;
    }
  }

  @Output() public cancel = new EventEmitter();
  @Output() public addTodo = new EventEmitter<TodoFormFields>();
  @Output() public editTodo = new EventEmitter<Todo>();

  public todoTypes = Object.values(TodoType);
  public isNew = true;
  private _value: Todo | null = null;

  public todoForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    type: [TodoType.PERSONAL, Validators.required],
    completed: [false],
  });

  constructor(private fb: NonNullableFormBuilder) {}

  public clearForm(): void {
    this.todoForm.reset();
  }

  public onCancel(): void {
    this.cancel.emit();
    this.clearForm();
  }

  public onSave(): void {
    const todo = this.todoForm.getRawValue();
    if (this.isNew) {
      this.addTodo.emit(todo);
    } else {
      console.log('value', this.value);

      this.editTodo.emit({
        ...todo,
        id: this._value?.id ?? '',
      });
    }
    this.clearForm();
  }
}
