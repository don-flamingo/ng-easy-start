import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-loader-shadow',
  templateUrl: './ui-loader-shadow.component.html',
  styleUrls: ['./ui-loader-shadow.component.scss'],
})
export class UiLoaderShadowComponent implements OnInit {
  @Input() loading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
