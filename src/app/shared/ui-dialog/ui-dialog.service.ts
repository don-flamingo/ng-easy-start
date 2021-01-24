import { Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';

@Injectable()
export class UiDialogService {
  constructor(private dialog: MatDialog) {}

  public show<T, D = any, R = any>(
    componentOrTemplateRef: any,
    config?: MatDialogConfig<D>
  ): MatDialogRef<T, R> {
    if (!config) {
      config = new MatDialogConfig<D>();
    }
    if (!config.width) {
      config.width = '80%';
    }
    if (!config.maxHeight) {
      config.maxHeight = '80%';
    }

    return this.dialog.open(componentOrTemplateRef, config);
  }
}
