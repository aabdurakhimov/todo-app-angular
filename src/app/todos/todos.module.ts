import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosComponent } from './todos.component';

@NgModule({
  declarations: [TodosComponent],
  imports: [BrowserAnimationsModule],
  exports: [TodosComponent],
})
export class TodosModule {}
