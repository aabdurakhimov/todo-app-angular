import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';

@NgModule({
  exports: [
    ButtonsModule,
    BrowserAnimationsModule,
    DialogsModule,
    InputsModule,
    LabelModule,
    DropDownsModule,
  ],
})
export class KendoModule {}
