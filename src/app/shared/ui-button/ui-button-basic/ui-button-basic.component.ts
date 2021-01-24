import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-button-basic',
  templateUrl: './ui-button-basic.component.html',
  styleUrls: ['./ui-button-basic.component.scss'],
})
export class UiButtonBasicComponent implements OnInit {
  @Input() color = 'accent';
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
