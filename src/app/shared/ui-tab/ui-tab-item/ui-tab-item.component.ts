import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-tab-item',
  templateUrl: './ui-tab-item.component.html',
  styleUrls: ['./ui-tab-item.component.scss'],
})
export class UiTabItemComponent implements OnInit {
  @Input() route: string;
  @Input() icon: string;
  @Input() displayTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
