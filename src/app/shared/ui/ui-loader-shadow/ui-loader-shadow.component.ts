import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

export const hide = [
  // :enter is alias to 'void => *'
  style({ opacity: 0 }),
  animate(500, style({ opacity: 1 })),
];

export const show = [
  // :enter is alias to 'void => *'
  animate(500, style({ opacity: 0 })),
];

@Component({
  selector: 'ng-easy-start-ui-loader-shadow',
  templateUrl: './ui-loader-shadow.component.html',
  styleUrls: ['./ui-loader-shadow.component.scss'],
  animations: [
    trigger('animate', [
      transition(':increment', hide),
      transition(':decrement', hide),
    ]),
  ],
})
export class UiLoaderShadowComponent implements OnInit {
  @Input() loading: boolean;

  constructor() {}

  ngOnInit(): void {}
}
