import { Component, OnInit, Input, Optional, forwardRef, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { FormSettings } from '../ui-form-settings.model';

@Component({
  selector: 'app-ui-form-select',
  templateUrl: './ui-form-select.component.html',
  styleUrls: ['./ui-form-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UiFormSelectComponent),
    },
  ],
})
export class UiFormSelectComponent implements OnInit, ControlValueAccessor {
  @Input() name: string;
  @Input() key: string;
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() controlName: string;
  @Input() formGroup: FormGroup;
  @Input() data: any[];
  @Input() disabled: boolean;

  selectedValue: any;
  settings = FormSettings;

  private _select: MatSelect;
  @ViewChild('select', { static: false }) set select(item: MatSelect) {
    this._select = item;

    if (!item) {
      return;
    }

    this.afterSelectHandle(item);
  }
  get select(): MatSelect {
    return this._select;
  }

  constructor(@Optional() private controlContainer: ControlContainer) {}

  ngOnInit() {
    if (!this.formGroup) {
      this.formGroup = this.controlContainer.control as FormGroup;
    }
  }

  private afterSelectHandle(item: MatSelect) {
    item.compareWith = (arg1, arg2) => this.compare(arg1, arg2, this.key);
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  compare(object1: any, object2: any, key: string) {
    return object1 && object2 && object1[key] == object2[key];
  }
}
