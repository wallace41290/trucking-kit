import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthError } from 'aws-amplify/auth';

import { AuthService } from '../../services';
import { User } from '../../models';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

// TODO: clean up, use state management, make dumb

@Component({
  selector: 'tk-auth-sign-up',
  standalone: true,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  imports: [FormsModule, NgIf],
})
export class SignUpComponent {
  loading: boolean;
  isConfirm: boolean;
  user: User;
  error?: string;

  constructor(private router: Router, private authService: AuthService) {
    this.loading = false;
    this.isConfirm = false;
    this.user = {} as User;
  }

  public signUp(): void {
    this.loading = true;
    this.error = undefined;
    this.authService
      .signUp(this.user)
      .then(() => {
        this.loading = false;
        this.isConfirm = true;
      })
      .catch((error: AuthError) => {
        this.loading = false;
        this.error = error.message;
        console.log('error', error.message);
      });
  }

  public confirmSignUp(): void {
    this.loading = true;
    this.error = undefined;
    this.authService
      .confirmSignUp(this.user)
      .then(() => {
        this.router.navigate(['/signIn']);
      })
      .catch((error: AuthError) => {
        this.loading = false;
        this.error = error.message;
      });
  }
}
