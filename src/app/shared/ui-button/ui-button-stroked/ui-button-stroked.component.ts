import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-button-stroked',
  templateUrl: './ui-button-stroked.component.html',
  styleUrls: ['./ui-button-stroked.component.scss'],
})
export class UiButtonStrokedComponent implements OnInit {
  @Input() color = 'accent';
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
