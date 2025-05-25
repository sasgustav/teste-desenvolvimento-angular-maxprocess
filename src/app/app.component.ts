import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from './core/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  menuItems: MenuItem[] = [];
  startTemplate = 'MaxProcess - Gustavo Vasconcelos';
  showBreadcrumbs = true;
  private subscription!: Subscription;

  constructor(private auth: AuthService, private router: Router) {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const isAuthPage =
          url.includes('/auth/login') || url.includes('/auth/forgot-password');
        this.showBreadcrumbs = !isAuthPage;
        this.startTemplate = isAuthPage
          ? 'Aplicação Teste Frontend MaxProcess'
          : 'MaxProcess';
        this.menuItems = isAuthPage ? [] : this.buildMenu();
      }
    });
  }

  ngOnInit(): void {
    this.menuItems = this.buildMenu();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }

  private buildMenu(): MenuItem[] {
    const items: MenuItem[] = [
      { label: 'Home', routerLink: '/home', icon: 'pi pi-home' },
      {
        label: 'Usuários',
        icon: 'pi pi-users',
        items: [
          { label: 'Lista', routerLink: '/users', icon: 'pi pi-list' },
        ]
      }
    ];
    return items;
  }
}
