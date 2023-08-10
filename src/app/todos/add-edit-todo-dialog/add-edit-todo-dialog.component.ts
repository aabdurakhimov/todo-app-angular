import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { TodoType } from '../models/todo-type.enum';
import { Todo } from '../models/todo.model';
import { createTodoFormGroup } from '../utils';
import { TodoFormFields } from './types';

@Component({
  selector: 'add-edit-todo-dialog',
  templateUrl: './add-edit-todo-dialog.component.html',
  styleUrls: ['./add-edit-todo-dialog.component.scss'],
})
export class AddEditTodoDialogComponent {
  @Input() public isOpen = false;
  @Input() public set value(todo: Todo | null) {
    this.selectedTodo = todo;
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
  private selectedTodo: Todo | null = null;

  public todoForm = createTodoFormGroup(this.fb);

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
    this.clearForm();
    if (!this.isNew && this.selectedTodo) {
      this.editTodo.emit({
        ...todo,
        id: this.selectedTodo.id,
      });
    } else {
      this.addTodo.emit(todo);
    }
  }
}
