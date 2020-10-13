import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AspectService } from 'src/app/core/aspect.service';

@Component({
  selector: 'ng-easy-start-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  private _changedSubscription: Subscription;

  @Input() formGroup: FormGroup;
  @Input() title: string;

  @Output() confirmClicked: EventEmitter<any> = new EventEmitter();
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter();

  changed: boolean;

  constructor(public aspectService: AspectService) {}

  ngOnInit(): void {
    this._changedSubscription = this.formGroup.valueChanges.subscribe(() => {
      this.changed = true;
    });
  }

  ngOnDestroy(): void {
    this._changedSubscription.unsubscribe();
  }
}
