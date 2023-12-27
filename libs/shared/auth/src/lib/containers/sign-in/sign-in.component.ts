import { Component } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthError } from 'aws-amplify/auth';

@Component({
  selector: 'tk-auth-sign-in',
  standalone:true,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  imports:[FormsModule, NgIf]
})
export class SignInComponent {
  loading: boolean;
  user: User;
  error?: string;

  constructor(private router: Router, private authService: AuthService) {
    this.loading = false;
    this.user = {} as User;
  }

  public signIn(): void {
    this.loading = true;
    this.error = undefined;
    this.authService
      .signIn(this.user)
      .then(() => {
        this.router.navigate(['/profile']);
      })
      .catch((error: AuthError) => {
        this.loading = false;
        this.error = error.message;
      });
  }
}
