import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
})
export class UiButtonComponent implements OnInit {
  @Input() color: string;
  @Input() disabled: boolean;

  constructor() {}

  ngOnInit(): void {}
}
