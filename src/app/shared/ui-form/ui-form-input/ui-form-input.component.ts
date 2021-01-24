import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { ControlContainer, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ClipboardService } from 'ngx-clipboard';
import { PayAdminDatePipe } from 'src/app/core/utils/date.pipeline';
import { FormSettings } from '../ui-form-settings.model';

@UntilDestroy()
@Component({
  selector: 'app-ui-form-input',
  templateUrl: './ui-form-input.component.html',
  styleUrls: ['./ui-form-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UiFormInputComponent),
    },
  ],
})
export class UiFormInputComponent implements OnInit, AfterViewInit {
  FormSettings = FormSettings;

  @ViewChild('formInput') input: ElementRef;

  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() type: string;
  @Input() copy: boolean;
  @Input() details: string;
  @Input() date: boolean;

  value: any;

  constructor(
    @Optional() private controlContainer: ControlContainer,
    private _datePipe: PayAdminDatePipe,
    private _translateService: TranslateService,
    private _clipboardService: ClipboardService
  ) {}
  ngOnInit() {
    if (!this.formGroup) {
      this.formGroup = this.controlContainer.control as FormGroup;
    }

    this.formGroup.controls[this.formControlName].valueChanges.pipe(untilDestroyed(this)).subscribe((data) => {
      if (this.date) {
        this.input.nativeElement.value = this._datePipe.transform(this.value);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.date) {
      this.input.nativeElement.value = this._datePipe.transform(this.value);
    }
  }

  copyDetailsToCliboard() {
    this._translateService.get(this.details).subscribe((data) => {
      this._clipboardService.copy(data);
    });
  }

  copyToCliboard() {
    const value = this.formGroup.controls[this.formControlName].value;
    this._clipboardService.copy(value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
