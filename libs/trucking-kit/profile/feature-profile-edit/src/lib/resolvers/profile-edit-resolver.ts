import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProfileStore } from '@trucking-kit/profile/data-access';
import { of } from 'rxjs';

export const profileEditResolver: ResolveFn<boolean> = () => {
  const profileStore = inject(ProfileStore);
  profileStore.getProfile();
  return of(true);
};
