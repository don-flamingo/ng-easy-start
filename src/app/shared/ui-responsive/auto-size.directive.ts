import { Directive, AfterContentInit, HostBinding, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[AppAutoSize]',
})
export class FullPageAutoSizeDirective implements AfterContentInit {
  @HostBinding('style.height')
  height: string;

  @HostBinding('style.width')
  width: string;

  @HostBinding('style.top')
  top = '0';

  @HostBinding('style.left')
  left = '0';

  constructor(private elementRef: ElementRef) {}

  ngAfterContentInit(): void {
    this.calculateHeight();
    setTimeout(() => {
      this.calculateHeight();
    }, 300);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateHeight();
  }

  private calculateHeight() {
    this.height = window.innerHeight + 'px';
    this.width = window.innerWidth + 'px';
  }
}
