import { inject } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard = (): Observable<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    map((isAuthenticated) => {
      if (!isAuthenticated) {
        return router.parseUrl('/login');
      }
      return true;
    }),
    take(1)
  );
};
