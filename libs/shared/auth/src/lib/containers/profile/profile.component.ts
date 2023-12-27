import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { AuthError } from 'aws-amplify/auth';

@Component({
  selector: 'tk-auth-profile',
  standalone:true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  imports:[FormsModule, NgIf]
})
export class ProfileComponent implements OnInit {
  loading: boolean;
  email?: string;
  name?: string;
  error?: string;

  constructor(private authService: AuthService) {
    this.loading = true;
    this.email = '';
    this.name = '';
  }

  public ngOnInit(): void {
    this.authService.getUserAttributes().then((attributes) => {
      this.email = attributes.email;
      this.name = attributes.name;
      this.loading = false;
    }).catch((error: AuthError) => {
      this.loading = false;
      this.error = error.message;
    });
  }

  public update(): void {
    this.loading = true;
    this.error = undefined;

    this.authService.updateUserAttributes({userAttributes:{name:this.name}})
    .then(() => {
      this.loading = false;
    }).catch((error: AuthError) => {
      this.loading = false;
      this.error = error.message;
    });;
  }
}
