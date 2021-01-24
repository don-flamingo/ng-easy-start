import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AspectService } from '../ui-responsive/aspect.service';

@Component({
  selector: 'app-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrls: ['./ui-form.component.scss'],
})
export class UiFormComponent implements OnInit, AfterViewInit, OnDestroy {
  private _changedSub: Subscription;

  @Input() changed: boolean;

  @Output() confirmClicked: EventEmitter<any> = new EventEmitter();
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter();

  @Input() title: string;
  @Input() formGroup: FormGroup;
  @Input() loading: boolean;

  @Input() confirmTitle = 'global.ok';
  @Input() cancelTitle = 'global.cancel';

  constructor(public aspectService: AspectService) {}

  ngOnInit() {
    this._changedSub = this.formGroup.valueChanges.subscribe((data) => {
      this.changed = true;
    });
  }

  ngOnDestroy() {}

  ngAfterViewInit(): void {}
}
