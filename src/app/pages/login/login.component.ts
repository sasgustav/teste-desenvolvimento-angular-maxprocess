import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  remember = false;
  error = '';
  loading = false;

  constructor(
    private auth: AuthService,
    private router: Router
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

    const saved = localStorage.getItem('rememberedUsername');
    if (saved) {
      this.username = saved;
      this.remember = true;
    }
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

  login(): void {
    this.error = '';
    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Informe usuário e senha';
      return;
    }
    this.loading = true;
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        if (this.remember) {
          localStorage.setItem('rememberedUsername', this.username);
        } else {
          localStorage.removeItem('rememberedUsername');
        }
        this.router.navigate(['/home']);
        this.loading = false;
      },
      error: () => {
        this.error = 'Credenciais inválidas';
        this.loading = false;
      }
    });
  }
}
