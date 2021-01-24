import { UiButtonModule } from './../ui-button/ui-button.module';
import { UiTooltipModule } from './../ui-tooltip/ui-tooltip.module';
import { MatButtonModule } from '@angular/material/button';
import { UiIconModule } from './../ui-icon/ui-icon.module';
import { UiChipModule } from './../ui-chip/ui-chip.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiFormComponent } from './ui-form.component';
import { UiFormInputComponent } from './ui-form-input/ui-form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppCoreModule } from 'src/app/core/core.module';
import { MatInputModule } from '@angular/material/input';
import { UiFormChipListComponent } from './ui-form-chip-list/ui-form-chip-list.component';
import { UiFormChipComponent } from './ui-form-chip-list/ui-form-chip/ui-form-chip.component';
import { UiLoaderModule } from '../ui-loader/ui-loader.module';
import { UiFormErrorsComponent } from './ui-form-errors/ui-form-errors.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UiFormApiSelectComponent } from './ui-form-api-select/ui-form-api-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectInfiniteScrollModule } from 'ng-mat-select-infinite-scroll';
import { UiFormSelectComponent } from './ui-form-select/ui-form-select.component';
import { UiFormApiSelectCifCreditContractsComponent } from './ui-form-api-select/ui-form-api-select-cif-credit-contracts/ui-form-api-select-cif-credit-contracts.component';

const components = [
  UiFormComponent,
  UiFormInputComponent,
  UiFormChipListComponent,
  UiFormChipComponent,
  UiFormApiSelectComponent,
  UiFormSelectComponent,
  UiFormApiSelectCifCreditContractsComponent,
];

@NgModule({
  declarations: [components, UiFormErrorsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    AppCoreModule,
    MatInputModule,
    UiChipModule,
    UiLoaderModule,
    UiIconModule,
    MatButtonModule,
    UiTooltipModule,
    ClipboardModule,
    MatSelectModule,
    UiButtonModule,
    MatSelectInfiniteScrollModule,
  ],
  exports: [components, ReactiveFormsModule, FormsModule],
})
export class UiFormModule {}
