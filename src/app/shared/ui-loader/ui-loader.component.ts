import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-loader',
  templateUrl: './ui-loader.component.html',
  styleUrls: ['./ui-loader.component.scss'],
})
export class UiLoaderComponent implements OnInit {
  @Input() mode = 'indeterminate';
  @Input() loading: boolean;
  @Input() value: number;
  @Input() color = 'primary';

  constructor() {}

  ngOnInit(): void {}
}
