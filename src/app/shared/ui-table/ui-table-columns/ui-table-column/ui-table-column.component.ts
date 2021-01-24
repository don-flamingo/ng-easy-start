import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ui-table-column',
  templateUrl: './ui-table-column.component.html',
  styleUrls: ['./ui-table-column.component.scss'],
})
export class UiTableColumnComponent implements OnInit {
  @Input() displayName: string;
  @Input() field: string;
  @Input() type: string;
  @Input() template?: TemplateRef<any>;
  @Input() sortable: boolean = true;
  @Input() tooltip: string;

  constructor() {}

  ngOnInit(): void {}
}
