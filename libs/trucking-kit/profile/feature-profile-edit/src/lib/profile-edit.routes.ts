import { Routes } from '@angular/router';
import { ProfileEditComponent } from './profile-edit.component';
import { profileEditResolver } from './resolvers/profile-edit-resolver';

export const PROFILE_EDIT_ROUTES: Routes = [
  {
    path: '',
    component: ProfileEditComponent,
    resolve: { profileEditResolver },
  },
];
