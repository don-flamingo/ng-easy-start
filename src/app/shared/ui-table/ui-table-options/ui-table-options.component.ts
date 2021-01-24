import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-table-options',
  templateUrl: './ui-table-options.component.html',
  styleUrls: ['./ui-table-options.component.scss'],
})
export class UiTableOptionsComponent implements OnInit {
  @Input() name: string;
  @Input() defaultSort: string;
  @Input() defaultSortDirection: string;
  @Input() filterable: boolean;
  @Input() paginable = true;

  constructor() {}

  ngOnInit(): void {}
}
