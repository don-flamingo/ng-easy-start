import { Observable, BehaviorSubject, Subject, Subscription } from 'rxjs';
import { CollectionContract } from 'src/app/core/api/contracts.model';

export abstract class ApiSelectDataSource<TModel> {
  private data = new Subject<TModel[]>();
  private loadData = new Subject<boolean>();
  private loading = new Subject<boolean>();
  private loadDataSub = new Subscription();

  protected firstFetchDone = false;
  protected pageSize: number = 50;
  protected filter: ApiSelectFilter = {} as ApiSelectFilter;
  protected lastData: TModel[];

  totalCount: number;
  disabled: boolean;
  currentIndex: number = 0;

  loading$ = this.loading.asObservable();
  data$ = this.data.asObservable();

  constructor() {}

  destroy(): void {
    this.loadDataSub.unsubscribe();
  }

  initialize() {
    this.loadDataSub = this.loadData.subscribe((data) => {
      if (this.disabled) {
        return;
      }

      this.loading.next(true);
      this.getData(this.filter.inputValue, this.currentIndex).subscribe(
        (data) => {
          this.totalCount = data.totalCount;

          this.loading.next(false);
          this.data.next(data.data);
          this.firstFetchDone = true;
          this.lastData = data.data;
        }
      );
    });
  }

  protected abstract getData(
    inputValue: string,
    currentIndex: number
  ): Observable<CollectionContract<TModel>>;

  reloadData() {
    this.loadData.next(true);
  }

  setInputValue(value: string) {
    this.filter.inputValue = value;
  }

  getPageSize() {
    return this.pageSize;
  }

  reset() {
    delete this.filter.inputValue;
    this.currentIndex = 0;
    this.totalCount = 0;
    this.data.next([]);
  }
}

export interface ApiSelectFilter {
  value: string;
  inputValue: string;
}
