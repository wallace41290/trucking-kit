import { inject } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard = (): Observable<boolean> => {
  const authService = inject(AuthService);

  return authService.isAuthenticated().pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        return false;
      }
      return true;
    }),
    take(1)
  );
};
