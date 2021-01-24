import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-button-flat',
  templateUrl: './ui-button-flat.component.html',
  styleUrls: ['./ui-button-flat.component.scss'],
})
export class UiButtonFlatComponent implements OnInit {
  @Input() color = 'accent';
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
