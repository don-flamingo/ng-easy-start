import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-button-raised',
  templateUrl: './ui-button-raised.component.html',
  styleUrls: ['./ui-button-raised.component.scss'],
})
export class UiButtonRaisedComponent implements OnInit {
  @Input() color = 'accent';
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
