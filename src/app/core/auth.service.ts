import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  // Base URL da API de autenticação
  private api = `${environment.apiBase}/auth`;

  constructor(private http: HttpClient) {}

  /**
   * Realiza o login enviando usuario e senha para o servidor.
   * O endpoint configurado no server mock espera /auth/login.
   */
  login(username: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.api}/login`, { username, password })
      .pipe(
        tap((res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userEmail', username);
          const name = username.split('@')[0];
          localStorage.setItem('userName', name);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserName(): string | null {
    return localStorage.getItem('userName');
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  /**
   * Checks if a given JWT token is expired based on the `exp` claim.
   * If the token does not contain an expiration, it is considered valid.
   */
  isTokenExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1])) as { exp?: number };
      if (!payload.exp) {
        return false;
      }
      return payload.exp * 1000 < Date.now();
    } catch {
      return false;
    }
  }
}
