import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToolbarComponent } from './ui-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const components = [UiToolbarComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatToolbarModule],
  exports: [components],
})
export class UiToolbarModule {}
