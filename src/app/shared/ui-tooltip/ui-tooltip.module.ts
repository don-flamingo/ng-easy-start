import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UiTooltipDirective } from './ui-tooltip.directive';

const components = [UiTooltipDirective];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatTooltipModule],
  exports: [components],
})
export class UiTooltipModule {}
