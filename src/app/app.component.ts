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
  showMenu = true;

  constructor(private auth: AuthService, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showMenu = !event.urlAfterRedirects.includes('/auth/login');
      }
    });
  }

  ngOnInit(): void {
    this.menuItems = [
      { label: 'Home', routerLink: '/home' },
      { label: 'Usuários', routerLink: '/users' },
      { label: 'Sair', command: () => this.logout() }
    ];
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
