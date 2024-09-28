import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[tkPillTabs]',
  standalone: true,
})
export class TkPillTabsDirective {
  @HostBinding('class.tk-pill-tabs') tkPillTabs = true;
}
