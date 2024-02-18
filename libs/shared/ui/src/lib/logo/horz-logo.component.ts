import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TkLogoComponent } from './logo.component';

@Component({
  selector: 'tk-horz-logo',
  templateUrl: 'horz-logo.component.svg',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TkHorzLogoComponent extends TkLogoComponent {}
