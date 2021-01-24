import { UiTooltipModule } from './../ui-tooltip/ui-tooltip.module';
import { UiIconModule } from './../ui-icon/ui-icon.module';
import { UiButtonModule } from './../ui-button/ui-button.module';
import { UiCardModule } from './../ui-card/ui-card.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UiTableComponent } from './ui-table.component';
import { UiTableActionsComponent } from './ui-table-actions/ui-table-actions.component';
import { UiTableColumnsComponent } from './ui-table-columns/ui-table-columns.component';
import { UiTableFilterComponent } from './ui-table-filter/ui-table-filter.component';
import { UiTableActionComponent } from './ui-table-actions/ui-table-action/ui-table-action.component';
import { UiTableColumnComponent } from './ui-table-columns/ui-table-column/ui-table-column.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { UiTableColumnActionComponent } from './ui-table-columns/ui-table-column-action/ui-table-column-action.component';
import { UiTableOptionsComponent } from './ui-table-options/ui-table-options.component';
import { UiLoaderModule } from '../ui-loader/ui-loader.module';
import { AppCoreModule } from 'src/app/core/core.module';
import { UiFormModule } from '../ui-form/ui-form.module';

const components = [
  UiTableComponent,
  UiTableActionsComponent,
  UiTableColumnsComponent,
  UiTableFilterComponent,
  UiTableActionComponent,
  UiTableColumnComponent,
  UiTableColumnActionComponent,
  UiTableOptionsComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    UiLoaderModule,
    UiCardModule,
    AppCoreModule,
    UiButtonModule,
    UiIconModule,
    UiTooltipModule,
    UiFormModule,
  ],
  exports: [components],
  providers: [DatePipe],
})
export class UiTableModule {}
