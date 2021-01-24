import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-icon',
  templateUrl: './ui-icon.component.html',
  styleUrls: ['./ui-icon.component.scss'],
})
export class UiIconComponent implements OnInit {
  @Input() icon: string;
  @Input() color: string;
  @Input() type: string;
  @Input() tooltip: string;

  constructor() {}

  ngOnInit(): void {}
}
