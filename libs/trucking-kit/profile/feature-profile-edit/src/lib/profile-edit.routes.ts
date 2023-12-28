import { Routes } from '@angular/router';
import { authGuard } from '@shared/auth/data-access';
import { ProfileEditComponent } from './profile-edit.component';
import { profileEditResolver } from './resolvers/profile-edit-resolver';

export const PROFILE_EDIT_ROUTES: Routes = [
  {
    path: '',
    component: ProfileEditComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProfileEditComponent,
        canActivate: [authGuard],
        resolve: { profileEditResolver },
      },
    ],
  },
];
