import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from './core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menuItems: MenuItem[] = [];
  startTemplate = 'MaxProcess';
  showBreadcrumbs = true;

  private readonly appMenu: MenuItem[] = [
    { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
    { label: 'Usuários', routerLink: '/users', icon: 'pi pi-users' },
    { label: 'Sair', command: () => this.logout(), icon: 'pi pi-sign-out' }
  ];

  constructor(private auth: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isLogin = event.urlAfterRedirects.includes('/auth/login');
        this.showBreadcrumbs = !isLogin;
        if (isLogin) {
          this.menuItems = [];
          this.startTemplate =
            'Aplicação Teste Frontend MaxProcess - Desenvolvido por Gustavo Vasconcelos';
        } else {
          this.menuItems = this.appMenu;
          this.startTemplate = 'MaxProcess';
        }
      }
    });
  }

  ngOnInit(): void {
    this.menuItems = this.appMenu;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
