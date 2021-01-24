import {
  Component,
  forwardRef,
  Input,
  OnInit,
  Optional,
  TemplateRef,
} from '@angular/core';
import { ControlContainer, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ApiHttpService } from 'src/app/core/api/api-http.service';
import { UiFormApiSelectCreditContractsDataSource } from './ui-form-api-select-cif-credit-contracts.data-source';

@Component({
  selector: 'vabank-payadmin-ui-form-api-select-cif-credit-contracts',
  templateUrl: './ui-form-api-select-cif-credit-contracts.component.html',
  styleUrls: ['./ui-form-api-select-cif-credit-contracts.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UiFormApiSelectCifCreditContractsComponent),
    },
  ],
})
export class UiFormApiSelectCifCreditContractsComponent implements OnInit {
  @Input() userToken: string;
  @Input() name: string;
  @Input() key: string;
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() disabled: boolean;
  @Input() lazyLoading = true;
  @Input() itemTemplate: TemplateRef<any>;

  dataSource: UiFormApiSelectCreditContractsDataSource;

  constructor(
    private _apiService: ApiHttpService,
    @Optional() private _controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    if (!this.formGroup) {
      this.formGroup = this._controlContainer.control as FormGroup;
    }

    this.dataSource = new UiFormApiSelectCreditContractsDataSource(
      this._apiService
    );
    this.dataSource.userToken = this.userToken;
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
