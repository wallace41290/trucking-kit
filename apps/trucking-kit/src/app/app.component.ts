import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components';
import { AuthStore } from '@shared/auth/data-access';
import { AsyncPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [AsyncPipe, NavbarComponent, RouterModule],
  selector: 'tk-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly authStore = inject(AuthStore);

  $isLoggedIn = this.authStore.loggedIn;

  ngOnInit(): void {
    this.authStore.getUser();
  }

  logout() {
    this.authStore.logout();
  }
}
