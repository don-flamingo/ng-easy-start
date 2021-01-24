import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-form-chip',
  templateUrl: './ui-form-chip.component.html',
  styleUrls: ['./ui-form-chip.component.scss'],
})
export class UiFormChipComponent implements OnInit {
  color: string;

  @Input() property: string;

  @Output() clicked = new EventEmitter<ChipClickEvent>();

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.clicked.emit({ property: this.property });

    this.select();
  }

  select() {
    this.color = 'accent';
  }

  deselect() {
    delete this.color;
  }
}

export interface ChipClickEvent {
  property: string;
}
