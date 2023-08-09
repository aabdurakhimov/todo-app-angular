import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoState } from './store/todo.state';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([TodoState]),
    ButtonsModule,
    BrowserAnimationsModule,
    TodosModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
