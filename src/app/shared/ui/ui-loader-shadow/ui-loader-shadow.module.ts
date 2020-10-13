import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLoaderShadowComponent } from './ui-loader-shadow.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [UiLoaderShadowComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class UiLoaderShadowModule {}
