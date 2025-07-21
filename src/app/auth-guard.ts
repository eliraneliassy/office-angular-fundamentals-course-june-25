import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {Auth} from './auth';
import {tap} from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  return authService.isLoggedIn$
    .pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          router.navigateByUrl('/auth/login')
        }
      })
    );
};
