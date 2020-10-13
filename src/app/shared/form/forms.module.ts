import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { FormActionsComponent } from './form-actions/form-actions.component';

@NgModule({
  declarations: [FormComponent, FormActionsComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormComponent, FormActionsComponent],
})
export class NgEasyStartFormsModule {}
