import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <div class="p-4">
      <h2>Login</h2>
      <input [(ngModel)]="username" placeholder="Login" pInputText />
      <input [(ngModel)]="password" placeholder="Senha" type="password" pInputText />
      <button (click)="login()" pButton label="Entrar"></button>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.username, this.password).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
