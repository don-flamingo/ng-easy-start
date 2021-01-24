import { CollectionContract } from './../../../core/api/contracts.model';
import { Subscription } from 'rxjs';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TableSettings } from './ui-table-default-settings.model';
import { finalize, map } from 'rxjs/operators';

export abstract class UiTableApiDataSourceBase<
  TModel
> extends DataSource<TModel> {
  private _transformingSubscriptions: Subscription;

  private _data = new Subject<CollectionContract<TModel>>();
  private _loading = new BehaviorSubject(true);
  private _lastQuery: Query = {
    where: '',
    orderBy: '',
    page: 0,
    pageSize: TableSettings.pageSize,
  };

  loading$ = this._loading.asObservable();
  data$ = this._data.asObservable();

  connect(
    collectionViewer: CollectionViewer
  ): Observable<TModel[] | readonly TModel[]> {
    return this._data.pipe(map((contract) => contract.data));
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this._data.unsubscribe();
  }

  fetch(where: string, orderBy: string, page: number, pageSize: number) {
    this._lastQuery.where = where;
    this._lastQuery.orderBy = orderBy;
    this._lastQuery.page = page;
    this._lastQuery.pageSize = pageSize;

    this.reloadData();
  }

  reloadData() {
    this._loading.next(true);

    this.load(
      this._lastQuery.where,
      this._lastQuery.orderBy,
      this._lastQuery.page,
      this._lastQuery.pageSize
    )
      .pipe(finalize(() => this._loading.next(false)))
      .subscribe((response) => {
        this._data.next(response);
      });
  }

  abstract load(
    where: string,
    orderBy: string,
    page: number,
    pageSize: number
  ): Observable<CollectionContract<TModel>>;
}

interface Query {
  where: string;
  orderBy: string;
  page: number;
  pageSize: number;
}
