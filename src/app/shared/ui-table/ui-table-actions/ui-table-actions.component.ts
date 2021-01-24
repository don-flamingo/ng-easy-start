import { Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { UiTableActionComponent } from './ui-table-action/ui-table-action.component';

@Component({
  selector: 'app-ui-table-actions',
  templateUrl: './ui-table-actions.component.html',
  styleUrls: ['./ui-table-actions.component.scss'],
})
export class UiTableActionsComponent implements OnInit {
  @ContentChildren(UiTableActionComponent)
  actions: QueryList<UiTableActionComponent>;

  constructor() {}

  ngOnInit(): void {}
}
