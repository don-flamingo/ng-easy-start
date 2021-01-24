import { UiTabComponent } from './../ui-tab.component';
import { transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { UiTabItemComponent } from '../ui-tab-item/ui-tab-item.component';
import { hide } from '../ui-tab.component';

@Component({
  selector: 'app-ui-tab-card',
  templateUrl: './ui-tab-card.component.html',
  styleUrls: ['./ui-tab-card.component.scss'],
  animations: [trigger('animRoutes', [transition(':increment', hide)])],
})
export class UiTabCardComponent implements OnInit, AfterViewInit {
  @ContentChildren(UiTabItemComponent) tabs: QueryList<UiTabItemComponent>;
  @Input() loading: boolean;

  @ViewChild(UiTabComponent) tab: UiTabComponent;

  animationState = 0;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.tab.tabs = this.tabs;
  }

  onActivate(event) {
    this.animationState++;
  }
}
