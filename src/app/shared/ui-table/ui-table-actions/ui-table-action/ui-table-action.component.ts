import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-table-action',
  templateUrl: './ui-table-action.component.html',
  styleUrls: ['./ui-table-action.component.scss'],
})
export class UiTableActionComponent implements OnInit {
  @Output() click = new EventEmitter<any>();

  @Input() icon: string;
  @Input() tooltip: string;
  @Input() value: any;
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
