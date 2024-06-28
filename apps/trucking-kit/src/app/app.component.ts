import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components';
import { AsyncPipe } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {
  AmplifyAuthenticatorModule,
  AuthenticatorService,
} from '@aws-amplify/ui-angular';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '@shared/auth/data-access';
import { TkLogoModule, TkNavigationRailComponent } from '@shared/ui';

@Component({
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule,
    AsyncPipe,
    NavbarComponent,
    RouterModule,
    TkLogoModule,
    TkNavigationRailComponent,
    MatButtonModule,
    MatIconModule,
  ],
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly authService = inject(AuthService);
  authenticator = inject(AuthenticatorService);

  $isLoggedIn = this.authService.isAuthenticatedState$;

  constructor(private matIconReg: MatIconRegistry) {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  logout() {
    this.authService.logout();
  }
}
