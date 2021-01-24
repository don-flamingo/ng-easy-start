import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCardComponent } from './ui-card.component';
import { MatCardModule } from '@angular/material/card';
import { UiCardTitleComponent } from './ui-card-title/ui-card-title.component';
import { UiCardSubtitleComponent } from './ui-card-subtitle/ui-card-subtitle.component';
import { UiCardContentComponent } from './ui-card-content/ui-card-content.component';
import { UiCardActionsComponent } from './ui-card-actions/ui-card-actions.component';
import { UiCardFooterComponent } from './ui-card-footer/ui-card-footer.component';
import { UiCardBelowComponent } from './ui-card-below/ui-card-below.component';

const components = [
  UiCardComponent,
  UiCardTitleComponent,
  UiCardSubtitleComponent,
  UiCardContentComponent,
  UiCardActionsComponent,
  UiCardFooterComponent,
  UiCardBelowComponent,
];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatCardModule],
  exports: [components],
})
export class UiCardModule {}
