import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ui-form-errors',
  templateUrl: './ui-form-errors.component.html',
  styleUrls: ['./ui-form-errors.component.scss'],
})
export class UiFormErrorsComponent {
  @Input() control: FormControl;

  constructor() {}

  ngOnInit(): void {}

  // for debug ;-)
  checkErrors() {
    return this.control.errors;
  }
}
