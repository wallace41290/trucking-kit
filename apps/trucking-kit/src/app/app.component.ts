import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, NavbarComponent } from './components';
import { AuthStore } from '@shared/auth/data-access';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe, FooterComponent, NavbarComponent, RouterModule],
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly authStore = inject(AuthStore);

  $isLoggedIn = this.authStore.loggedIn;

  logout() {
    this.authStore.logout();
  }
}
