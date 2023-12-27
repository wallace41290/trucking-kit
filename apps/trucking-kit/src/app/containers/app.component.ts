import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
// TODO: move to data-access lib
import { AuthService } from '@shared/auth/feature-auth';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf],
  selector: 'trucking-kit-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(private router: Router, private authService: AuthService) {
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
      if (this.isAuthenticated) {
        this.router.navigate(['/profile']);
      }
    });
  }

  signOut(): void {
    this.authService.signOut().then(() => {
      this.router.navigate(['/signIn']);
    });
  }
}
