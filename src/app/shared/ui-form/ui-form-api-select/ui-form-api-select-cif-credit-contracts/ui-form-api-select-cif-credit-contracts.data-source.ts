import { Observable } from 'rxjs';
import { ApiHttpService } from 'src/app/core/api/api-http.service';
import { CollectionContract } from 'src/app/core/api/contracts.model';
import { Money } from 'src/app/core/domain/money.model';
import { ApiSelectDataSource } from '../api-select.data-source';

export class UiFormApiSelectCreditContractsDataSource extends ApiSelectDataSource<CreditContract> {
  userToken: string;

  constructor(private _apiService: ApiHttpService) {
    super();
  }

  protected getData(
    inputValue: string,
    currentIndex: number
  ): Observable<CollectionContract<CreditContract>> {
    const query = {
      number: inputValue,
      orderBy: 'createdAt-desc',
      page: currentIndex,
      pageSize: this.pageSize,
    } as GetCreditContractsQuery;

    return this._apiService.post(
      ['customers', this.userToken, 'cif', 'credit-contracts'],
      query
    );
  }
}

export interface CreditContract {
  number: string;
  amount: Money;
  nearInstallment: Money;
  status: string;

  nearInstallmentDate: Date;
  createdAt: Date;
  closingAt: Date;
}

export interface GetCreditContractsQuery {
  number: string;

  orderBy: string;
  page: number;
  pageSize: number;
}
