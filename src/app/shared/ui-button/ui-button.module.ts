import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonStrokedComponent } from './ui-button-stroked/ui-button-stroked.component';
import { MatButtonModule } from '@angular/material/button';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiButtonFlatComponent } from './ui-button-flat/ui-button-flat.component';
import { UiButtonRaisedComponent } from './ui-button-raised/ui-button-raised.component';
import { UiButtonBasicComponent } from './ui-button-basic/ui-button-basic.component';

const components = [
  UiButtonStrokedComponent,
  UiButtonComponent,
  UiButtonFlatComponent,
  UiButtonRaisedComponent,
  UiButtonBasicComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatButtonModule],
  exports: [components],
})
export class UiButtonModule {}
