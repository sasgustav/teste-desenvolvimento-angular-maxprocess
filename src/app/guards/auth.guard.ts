import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface JwtPayload {
  exp: number;
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  private tokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])) as JwtPayload;
      return payload.exp * 1000 < Date.now();
    } catch {
      return true;
    }
  }

  canActivate(): boolean {
    const token = this.auth.getToken();
    if (!token || this.tokenExpired(token)) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
