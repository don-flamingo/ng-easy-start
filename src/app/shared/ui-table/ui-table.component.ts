import { UiTableFilterComponent } from './ui-table-filter/ui-table-filter.component';
import { untilDestroyed } from '@ngneat/until-destroy';
import { TableSettings } from './ui-table-default-settings.model';
import { UiTableColumnsComponent } from './ui-table-columns/ui-table-columns.component';
import { AfterContentInit, AfterViewInit, Component, ContentChild, Input, OnInit, ViewChild } from '@angular/core';
import { UiTableOptionsComponent } from './ui-table-options/ui-table-options.component';
import { DataSource } from '@angular/cdk/table';
import { UiTableColumnComponent } from './ui-table-columns/ui-table-column/ui-table-column.component';
import { UiTableApiDataSourceBase } from './ui-table-api.data-source';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UntilDestroy } from '@ngneat/until-destroy';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UiTableActionsComponent } from './ui-table-actions/ui-table-actions.component';

@UntilDestroy()
@Component({
  selector: 'app-ui-table',
  templateUrl: './ui-table.component.html',
  styleUrls: ['./ui-table.component.scss'],
})
export class UiTableComponent<TModel> implements OnInit, AfterViewInit {
  private _reloadTableAfterFilterChangedInterval = 500;

  @ContentChild(UiTableColumnsComponent)
  columnsComponent: UiTableColumnsComponent;
  @ContentChild(UiTableOptionsComponent)
  optionsComponent: UiTableOptionsComponent;
  @ContentChild(UiTableFilterComponent)
  filtersComponent: UiTableFilterComponent;
  @ContentChild(UiTableActionsComponent)
  actionsComponent: UiTableActionsComponent;

  @Input() dataSource: UiTableApiDataSourceBase<TModel>;
  @Input() loading: boolean;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  defaultSettings = TableSettings;

  constructor() {}

  ngOnInit(): void {
    this.dataSource.data$.pipe(untilDestroyed(this)).subscribe((data) => {
      if (this.paginator) {
        this.paginator.length = data.totalCount;
      }
    });
  }

  ngAfterViewInit(): void {
    this.paginator?.page?.pipe(untilDestroyed(this)).subscribe((data) => {
      this.loadData();
    });

    this.sort.sortChange.pipe(untilDestroyed(this)).subscribe((data) => {
      this.loadData();
    });

    this.filtersComponent?.formGroup.controls.filter.valueChanges
      .pipe(debounceTime(this._reloadTableAfterFilterChangedInterval), distinctUntilChanged())
      .pipe(untilDestroyed(this))
      .subscribe((data) => {
        this.loadData();
      });

    this.loadData();
  }

  private loadData() {
    this.dataSource.fetch(
      this.filtersComponent?.formGroup.controls.filter.value,
      this.getSort(),
      this.paginator?.pageIndex,
      this.paginator?.pageSize
    );
  }

  private getSort() {
    let orderBy = this.sort.active;

    if (!orderBy) {
      return;
    }

    if (this.sort.direction !== '') {
      orderBy += `-${this.sort.direction}`;
    }

    return orderBy;
  }

  getColumns() {
    const columns = this.columnsComponent.columns.map((x) => x.field);
    const actions = this.columnsComponent.actions.map((x) => x.name);

    return columns.concat(actions);
  }

  getCellValue(column: UiTableColumnComponent, item: any) {
    const nested = column.field.split('.');
    if (nested.length == 2) {
      if (nested[0]) {
        return item[nested[0]][nested[1]];
      }
    } else if (nested.length == 3) {
      return item[nested[0]][nested[1]][nested[2]];
    }

    return item[column.field];
  }
}
