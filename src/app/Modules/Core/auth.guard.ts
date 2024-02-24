import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Auth/services/auth.service';
import { GoToService } from '../Shared/services/go-to.service';

export const authGuard: CanActivateFn = (route, state) => {

  const _Router = inject(Router);
  const _GoToService = inject(GoToService);
  const _AuthService = inject(AuthService);

  if (_AuthService.getToken())
    return true
  else {
    _Router.navigate([_GoToService.page.login]);
    return false;
  }
};
