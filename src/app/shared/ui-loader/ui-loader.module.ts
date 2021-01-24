import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoaderShadowComponent } from './ui-loader-shadow/ui-loader-shadow.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UiLoaderComponent } from './ui-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const components = [UiLoaderShadowComponent, UiLoaderComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, MatProgressSpinnerModule, MatProgressBarModule],
  exports: [components],
})
export class UiLoaderModule {}
