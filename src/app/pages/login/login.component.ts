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

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const saved = localStorage.getItem('rememberedUsername');
    if (saved) {
      this.username = saved;
      this.remember = true;
    }
  }

  login(): void {
    this.error = '';
    if (!this.username.trim() || !this.password.trim()) {
      this.error = 'Informe usuário e senha';
      return;
    }
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        if (this.remember) {
          localStorage.setItem('rememberedUsername', this.username);
        } else {
          localStorage.removeItem('rememberedUsername');
        }
        this.router.navigate(['/home']);
      },
      error: () => this.error = 'Credenciais inválidas'
    });
  }
}
