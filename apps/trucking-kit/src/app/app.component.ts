import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components';
import { AsyncPipe } from '@angular/common';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { AuthService } from '@shared/auth/data-access';

@Component({
  standalone: true,
  imports: [
    AsyncPipe,
    NavbarComponent,
    RouterModule,
    AmplifyAuthenticatorModule,
  ],
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly authService = inject(AuthService);

  $isLoggedIn = this.authService.isAuthenticatedState$;

  logout() {
    this.authService.logout();
  }
}
