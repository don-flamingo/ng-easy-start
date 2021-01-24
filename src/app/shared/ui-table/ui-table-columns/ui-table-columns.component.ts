import { UiTableColumnComponent } from './ui-table-column/ui-table-column.component';
import { Component, ContentChildren, OnInit, QueryList, ViewChildren } from '@angular/core';
import { UiTableColumnActionComponent } from './ui-table-column-action/ui-table-column-action.component';

@Component({
  selector: 'app-ui-table-columns',
  templateUrl: './ui-table-columns.component.html',
  styleUrls: ['./ui-table-columns.component.scss'],
})
export class UiTableColumnsComponent implements OnInit {
  @ContentChildren(UiTableColumnComponent)
  columns: QueryList<UiTableColumnComponent>;

  @ContentChildren(UiTableColumnActionComponent)
  actions: QueryList<UiTableColumnActionComponent>;

  constructor() {}

  ngOnInit(): void {}
}
