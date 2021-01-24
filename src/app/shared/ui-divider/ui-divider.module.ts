import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiDividerComponent } from './ui-divider.component';
import { MatDividerModule } from '@angular/material/divider';

const components = [UiDividerComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatDividerModule],
  exports: [components],
})
export class UiDividerModule {}
