import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiChipListComponent } from './ui-chip-list/ui-chip-list.component';
import { UiChipComponent } from './ui-chip/ui-chip.component';
import { MatChipsModule } from '@angular/material/chips';

const components = [UiChipListComponent, UiChipComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatChipsModule],
  exports: [components],
})
export class UiChipModule {}
