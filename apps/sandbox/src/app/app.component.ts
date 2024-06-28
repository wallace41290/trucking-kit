import { Component } from '@angular/core';
import { SandboxNavComponent } from './containers/sandbox-nav/sandbox-nav.component';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  standalone: true,
  imports: [SandboxNavComponent],
  selector: 'sandbox-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private matIconReg: MatIconRegistry) {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }
}
