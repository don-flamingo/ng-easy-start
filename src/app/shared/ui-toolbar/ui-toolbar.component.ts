import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-toolbar',
  templateUrl: './ui-toolbar.component.html',
  styleUrls: ['./ui-toolbar.component.scss'],
})
export class UiToolbarComponent implements OnInit {
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}
}
