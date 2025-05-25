import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit, OnDestroy {
  error = '';
  loading = false;
  rememberedUsername = '';
  private subscription!: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Caso o usuário já possua um token válido no localStorage,
    // redirecionamos diretamente para a home para evitar
    // exibir novamente o formulário de login.
    const token = this.auth.getToken();
    if (token && !this.tokenExpired(token)) {
      this.router.navigate(['/home']);
      return;
    }

    this.rememberedUsername =
      localStorage.getItem('rememberedUsername') ?? '';
  }

  /**
   * Verifica se o token JWT está expirado.
   */
  private tokenExpired(token: string): boolean {
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

  login(credentials: {
    username: string;
    password: string;
    remember: boolean;
  }): void {
    this.error = '';
    if (!credentials.username.trim() || !credentials.password.trim()) {
      this.error = 'Informe usuário e senha';
      return;
    }
    this.loading = true;
    this.subscription = this.auth
      .login(credentials.username, credentials.password)
      .subscribe({
        next: () => {
          if (credentials.remember) {
            localStorage.setItem('rememberedUsername', credentials.username);
          } else {
            localStorage.removeItem('rememberedUsername');
          }
          this.router.navigate(['/home']);
          this.loading = false;
        },
        error: () => {
          this.error = 'Credenciais inválidas';
          this.loading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
