import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-table-column-action',
  templateUrl: './ui-table-column-action.component.html',
  styleUrls: ['./ui-table-column-action.component.scss'],
})
export class UiTableColumnActionComponent implements OnInit {
  @Input() name: string;
  @Input() displayName: string;
  @Input() icon: string;
  @Input() tooltip: string;
  @Input() visibleWhen?: (data: any) => boolean = (e) => true;

  @Output() click = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
