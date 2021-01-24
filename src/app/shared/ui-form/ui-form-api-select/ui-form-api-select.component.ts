import { Optional } from '@angular/core';
import { Component, ElementRef, forwardRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ControlContainer, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { FormSettings } from '../ui-form-settings.model';
import { ApiSelectDataSource } from './api-select.data-source';

@Component({
  selector: 'app-ui-form-api-select',
  templateUrl: './ui-form-api-select.component.html',
  styleUrls: ['./ui-form-api-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => UiFormApiSelectComponent),
    },
  ],
})
export class UiFormApiSelectComponent<TModel> implements OnInit {
  private readkeysAfter = 500;

  private _scrollItemSize: number;
  private _loadingSubscription: Subscription;
  private _filterSubscription: Subscription;

  @Input() name: string;
  @Input() key: string;
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() disabled: boolean;
  @Input() dataSource: ApiSelectDataSource<TModel>;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() lazyLoading = true;

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

  @ViewChild('filterControl') filterControl: ElementRef;

  offset: number;
  data: any[];
  totalCount: number;
  currentPage: number = 0;
  maxPageSize: number = 50;
  selectedValue: any;
  causedBy: ReloadDataCausedBy = ReloadDataCausedBy.initial;
  noResults = false;
  completeData = false;
  settings = FormSettings;

  constructor(@Optional() private _controlContainer: ControlContainer) {}

  ngOnInit() {
    if (!this.formGroup) {
      this.formGroup = this._controlContainer.control as FormGroup;
    }

    this.dataSource.initialize();

    this._loadingSubscription = this.dataSource.data$.subscribe((data) => {
      if (this.causedBy == ReloadDataCausedBy.scroll) {
        this.data = this.data.concat(data);
      } else {
        this.data = data;
      }

      this.noResults = this.dataSource.totalCount == 0;

      this.resetCausedByState();
    });

    this.assigneFormToDataSource();
    this.dataSource.reloadData();
  }

  private resetCausedByState() {
    this.causedBy = ReloadDataCausedBy.initial;
  }

  private assigneFormToDataSource() {
    this.dataSource.disabled = this.formGroup.controls[this.formControlName].disabled;
    this.formGroup.controls[this.formControlName].statusChanges.subscribe((data) => {
      this.dataSource.disabled = this.formGroup.controls[this.formControlName].disabled;
    });
  }

  private afterSelectHandle(item: MatSelect) {
    item.compareWith = (arg1, arg2) => this.compare(arg1, arg2, this.key);
  }

  ngOnDestroy() {
    this.dataSource.destroy();
  }

  compare(object1: any, object2: any, key: string) {
    return object1 && object2 && object1[key] == object2[key];
  }

  openedChange(isOpen: boolean) {
    if (!isOpen) {
      return;
    }

    this.filterControl.nativeElement.focus();
  }

  getNextBatch() {
    this.completeData = this.data?.length === this.dataSource?.totalCount || !this.lazyLoading;
    if (this.completeData) {
      return;
    }

    this.dataSource.currentIndex++;

    this.loadData(ReloadDataCausedBy.scroll);
  }

  ngAfterViewInit(): void {
    this.registerFilterInputListener();
  }

  private registerFilterInputListener() {
    this._filterSubscription = fromEvent(this.filterControl.nativeElement, 'keyup')
      .pipe(
        debounceTime(this.readkeysAfter),
        distinctUntilChanged(),
        tap(() => {
          const inputValue = this.filterControl.nativeElement.value;
          this.dataSource.setInputValue(inputValue);
          this.loadData(ReloadDataCausedBy.filter);
          this.completeData = false;
        })
      )
      .subscribe();
  }

  loadData(caused: ReloadDataCausedBy) {
    this.causedBy = caused;

    if (caused === ReloadDataCausedBy.filter) {
      this.dataSource.currentIndex = 0;
    }

    this.dataSource.reloadData();
  }

  clearValue() {
    this.formGroup.controls[this.formControlName].setValue(null);
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}

export enum ReloadDataCausedBy {
  initial = 0,
  filter = 1,
  scroll = 2,
}
