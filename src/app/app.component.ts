import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from './core/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    {
      label: 'Usuários',
      icon: 'pi pi-users',
      items: [
        { label: 'Listar Usuários', routerLink: '/users', icon: 'pi pi-list' },
      ],
    },
    { label: 'Sair', icon: 'pi pi-sign-out', command: () => this.logout() },
  ];

  startTemplate = 'MaxProcess';
  showBreadcrumbs = true;
  showHeader = true;

  constructor(private auth: AuthService, private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url = e.urlAfterRedirects;
        const isAuthPage =
          url.includes('/auth/login') || url.includes('/auth/forgot-password');
        this.showBreadcrumbs = !isAuthPage;
        this.showHeader = !isAuthPage;
      }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
