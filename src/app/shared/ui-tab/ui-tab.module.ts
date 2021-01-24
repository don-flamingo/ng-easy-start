import { UiCardModule } from './../ui-card/ui-card.module';
import { RouterModule } from '@angular/router';
import { AppCoreModule } from './../../../core/core.module';
import { UiResponsiveModule } from './../ui-responsive/ui-responsive.module';
import { UiLoaderModule } from './../ui-loader/ui-loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTabComponent } from './ui-tab.component';
import { UiTabItemComponent } from './ui-tab-item/ui-tab-item.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UiTabCardComponent } from './ui-tab-card/ui-tab-card.component';

const components = [UiTabComponent, UiTabItemComponent, UiTabCardComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, UiLoaderModule, UiResponsiveModule, AppCoreModule, RouterModule, MatTabsModule, UiCardModule],
  exports: [components],
})
export class UiTabModule {}
