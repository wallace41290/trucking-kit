import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tk-not-found-page',
  template: `
    <h1>404: Not Found</h1>
    <p>Hey! It looks like this page doesn't exist.</p>
    <button routerLink="/">Take Me Home</button>
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent {}
