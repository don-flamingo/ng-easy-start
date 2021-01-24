import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiIconComponent } from './ui-icon.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppCoreModule } from 'src/app/core/core.module';

const components = [UiIconComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatIconModule, MatTooltipModule, AppCoreModule],
  exports: [components],
})
export class UiIconModule {}
