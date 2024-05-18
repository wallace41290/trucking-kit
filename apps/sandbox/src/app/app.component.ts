import { Component } from '@angular/core';
import { SandboxNavComponent } from './containers/sandbox-nav/sandbox-nav.component';

@Component({
  standalone: true,
  imports: [SandboxNavComponent],
  selector: 'sandbox-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
