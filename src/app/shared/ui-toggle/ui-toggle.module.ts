import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToggleComponent } from './ui-toggle.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const components = [UiToggleComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatSlideToggleModule],
  exports: [components],
})
export class UiToggleModule {}
