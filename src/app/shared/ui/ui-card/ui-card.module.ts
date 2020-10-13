import { UiCardActionsComponent } from './ui-card-actions/ui-card-actions.component';
import { UiCardFooterComponent } from './ui-card-footer/ui-card-footer.component';
import { UiCardContentComponent } from './ui-card-content/ui-card-content.component';
import { UiCardTitleComponent } from './ui-card-title/ui-card-title.component';
import { UiCardSubtitleComponent } from './ui-card-subtitle/ui-card-subtitle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    UiCardComponent,
    UiCardSubtitleComponent,
    UiCardTitleComponent,
    UiCardContentComponent,
    UiCardFooterComponent,
    UiCardActionsComponent,
  ],
  exports: [UiCardComponent],
  imports: [CommonModule, MatCardModule],
})
export class UiCardModule {}
