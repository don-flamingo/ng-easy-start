import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiInputComponent } from './ui-input.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [UiInputComponent],
  imports: [CommonModule, MatInputModule],
  exports: [UiInputComponent],
})
export class UiInputModule {}
