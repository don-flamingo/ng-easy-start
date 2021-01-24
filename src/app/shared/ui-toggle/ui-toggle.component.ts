import { Component, OnInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-ui-toggle',
  templateUrl: './ui-toggle.component.html',
  styleUrls: ['./ui-toggle.component.scss'],
})
export class UiToggleComponent implements OnInit {
  @ViewChild(MatSlideToggle) toggle: MatSlideToggle;

  @Input() checked: boolean;
  @Output() change = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
