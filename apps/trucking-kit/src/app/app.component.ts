import { Component, inject, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {
  AmplifyAuthenticatorModule,
  AuthenticatorService,
} from '@aws-amplify/ui-angular';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '@shared/auth/data-access';
import {
  TkDestination,
  TkLogoModule,
  TkNavigationRailComponent,
} from '@shared/ui';

@Component({
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule,
    AsyncPipe,
    RouterModule,
    TkLogoModule,
    TkNavigationRailComponent,
    MatButtonModule,
    MatIconModule,
  ],
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  private readonly authService = inject(AuthService);
  authenticator = inject(AuthenticatorService);

  $isLoggedIn = this.authService.isAuthenticatedState$;

  destinations: TkDestination[] = [
    {
      label: 'Home',
      icon: 'home',
      route: '/home',
    },
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard',
    },
    {
      label: 'Company',
      icon: 'domain',
      route: '/company',
    },
    {
      label: 'Products',
      icon: 'category',
      route: '/products',
    },
    {
      label: 'Profile',
      icon: 'account_circle',
      route: '/profile-edit',
    },
  ];

  constructor(private matIconReg: MatIconRegistry) {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  logout() {
    this.authService.logout();
  }
}
