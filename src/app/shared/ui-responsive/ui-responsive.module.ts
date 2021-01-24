import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageAutoSizeDirective } from './auto-size.directive';
import { AspectService } from './aspect.service';

export const directives = [FullPageAutoSizeDirective];

@NgModule({
  declarations: [directives],
  providers: [AspectService],
  imports: [CommonModule],
  exports: [directives],
})
export class UiResponsiveModule {}
