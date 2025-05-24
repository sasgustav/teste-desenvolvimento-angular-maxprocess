import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['getToken', 'logout']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    guard = new AuthGuard(authService, router);
  });

  it('should allow activation with valid token', () => {
    authService.getToken.and.returnValue('header.payload.signature');
    spyOn<any>(guard as any, 'tokenExpired').and.returnValue(false);
    expect(guard.canActivate()).toBeTrue();
  });

  it('should block activation with invalid token', () => {
    authService.getToken.and.returnValue(null);
    expect(guard.canActivate()).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});
