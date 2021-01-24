import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { UiDialogService } from './ui-dialog.service';
import { UiDialogContentComponent } from './ui-dialog-content/ui-dialog-content.component';
import { UiDialogTitleComponent } from './ui-dialog-title/ui-dialog-title.component';
import { UiDialogActionsComponent } from './ui-dialog-actions/ui-dialog-actions.component';
import { UiDialogSubtitleComponent } from './ui-dialog-subtitle/ui-dialog-subtitle.component';

const components = [
  UiDialogContentComponent,
  UiDialogTitleComponent,
  UiDialogActionsComponent,
  UiDialogSubtitleComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatDialogModule, MatCardModule],
  providers: [UiDialogService],
  exports: [components],
})
export class UiDialogModule {}
