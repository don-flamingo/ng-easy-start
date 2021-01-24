import { AfterContentInit, ContentChildren, forwardRef, Input, Optional, QueryList } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ControlContainer, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormSettings } from '../ui-form-settings.model';
import { UiFormChipComponent } from './ui-form-chip/ui-form-chip.component';

@UntilDestroy()
@Component({
  selector: 'app-ui-form-chip-list',
  templateUrl: './ui-form-chip-list.component.html',
  styleUrls: ['./ui-form-chip-list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UiFormChipListComponent),
    },
  ],
})
export class UiFormChipListComponent implements OnInit, AfterContentInit {
  FormSettings = FormSettings;

  @Input() formControlName: string;
  @Input() formGroup: FormGroup;

  @ContentChildren(UiFormChipComponent) chips: QueryList<UiFormChipComponent>;

  constructor(@Optional() private controlContainer: ControlContainer) {}

  ngOnInit() {
    if (!this.formGroup) {
      this.formGroup = this.controlContainer.control as FormGroup;
    }
  }

  ngAfterContentInit(): void {
    const defaultChip = this.chips.filter((x) => x.property === this.formGroup.controls[this.formControlName].value)[0];

    defaultChip?.select();

    this.chips.forEach((chip) => {
      chip.clicked.pipe(untilDestroyed(this)).subscribe((event) => {
        this.formGroup.controls[this.formControlName].setValue(event.property);

        this.chips
          .filter((x) => x.property != event.property)
          .forEach((otherChip) => {
            otherChip.deselect();
          });
      });
    });
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
