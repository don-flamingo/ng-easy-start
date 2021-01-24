import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, ContentChildren, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { AfterViewInit, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';
import { AspectService } from '../ui-responsive/aspect.service';
import { UiTabItemComponent } from './ui-tab-item/ui-tab-item.component';

export const hide = [
  // :enter is alias to 'void => *'
  style({ opacity: 0 }),
  animate(500, style({ opacity: 1 })),
];

@Component({
  selector: 'app-ui-tab',
  templateUrl: './ui-tab.component.html',
  styleUrls: ['./ui-tab.component.scss'],
  animations: [trigger('animRoutes', [transition(':increment', hide)])],
})
export class UiTabComponent implements OnInit, AfterViewInit, OnDestroy {
  @ContentChildren(UiTabItemComponent) tabs: QueryList<UiTabItemComponent>;
  @Input() loading: boolean;
  @Input() customRouting = false;

  @Output() onActivated = new EventEmitter<any>();

  isViewInitialized = false;
  animationState: number = 0;
  navLinks = [];

  constructor(
    public aspectService: AspectService,
    public route: ActivatedRoute,
    public router: Router,
    public changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.navLinks =
      this.route.routeConfig && this.route.routeConfig.children
        ? this.buildNavItems(this.route.routeConfig.children)
        : [];
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return routes
      .filter((route) => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon,
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    if (!rla.linksWithHrefs) {
      return false;
    }

    const routerLink = rla.linksWithHrefs.first;

    return this.router.isActive(routerLink.urlTree, false);
  }

  onActivate($event) {
    this.animationState++;

    this.onActivated.next($event);
  }

  active(tab: UiTabItemComponent) {
    return this.router.url.includes(tab.route);
  }

  ngOnDestroy(): void {}
}
