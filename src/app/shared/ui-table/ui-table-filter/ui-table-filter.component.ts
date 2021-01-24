import { Optional } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { UiTableFilterForm } from './ui-table-filter-form.model';
import { UiTableFormService } from './ui-table-filter-form.service';

@Component({
  selector: 'app-ui-table-filter',
  templateUrl: './ui-table-filter.component.html',
  styleUrls: ['./ui-table-filter.component.scss'],
  providers: [UiTableFormService],
})
export class UiTableFilterComponent implements OnInit {
  @Input() formGroup: UiTableFilterForm;

  constructor(@Optional() private _controlContainer: ControlContainer, private _formService: UiTableFormService) {}

  ngOnInit(): void {
    if (!this.formGroup) {
      this.formGroup = this._formService.create();
    }
  }
}
