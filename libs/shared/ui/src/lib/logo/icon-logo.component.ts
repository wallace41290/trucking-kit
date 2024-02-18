import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TkLogoComponent } from './logo.component';

@Component({
  selector: 'tk-icon-logo',
  templateUrl: 'icon-logo.component.svg',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TkIconLogoComponent extends TkLogoComponent {}
