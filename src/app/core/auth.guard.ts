import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

interface JwtPayload {
  exp?: number;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  private tokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])) as JwtPayload;
      if (!payload.exp) {
        return false;
      }
      return payload.exp * 1000 < Date.now();
    } catch {
      return false;
    }
  }

  canActivate(): boolean {
    const token = this.auth.getToken();
    if (!token || this.tokenExpired(token)) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
