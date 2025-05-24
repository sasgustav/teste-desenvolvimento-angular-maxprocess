import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Usuários', routerLink: '/users' },
      { label: 'Sair', command: () => this.logout() }
    ];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
