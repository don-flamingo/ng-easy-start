import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ui-chip',
  templateUrl: './ui-chip.component.html',
  styleUrls: ['./ui-chip.component.scss'],
})
export class UiChipComponent implements OnInit {
  @Input() color: string;

  @Output() click = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  clickEmit() {
    this.click.emit();
  }
}
