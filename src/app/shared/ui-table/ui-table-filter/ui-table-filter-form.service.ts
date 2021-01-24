import { UiTableFilterForm } from './ui-table-filter-form.model';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class UiTableFormService {
  constructor(private _formBuilder: FormBuilder) {}

  create(): UiTableFilterForm {
    const form = this._formBuilder.group({
      filter: [''],
    }) as UiTableFilterForm;

    return form;
  }
}
