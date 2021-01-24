import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class UiToastService {
  constructor(
    private _translateService: TranslateService,
    private _snackBar: MatSnackBar,
    private _zone: NgZone
  ) {}

  public showSnackBarTranslatedMessageWithParams(key: string, params: any) {
    const sub = this._translateService.get(key, params).subscribe((data) => {
      this.showSnackBarMessage(data);

      try {
        sub?.unsubscribe();
      } catch (ex) {}
    });
  }

  public showSnackBarTranslatedMessage(key: string) {
    const sub = this._translateService.get(key).subscribe((data) => {
      this.showSnackBarMessage(data);
      try {
        sub?.unsubscribe();
      } catch (ex) {}
    });
  }

  public showSnackBarMessage(content: string) {
    this._zone.run(() => {
      const snackBar = this._snackBar.open(content, 'OK', {
        verticalPosition: 'bottom',
        horizontalPosition: 'center',
      });
      snackBar.onAction().subscribe(() => {
        snackBar.dismiss();
      });
    });
  }
}
