// src/app/shared/header/header.component.ts
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../core/auth.service';

interface NavItem {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName = '';
  userEmail = '';
  isMenuOpen = false;
  isMobile = window.innerWidth <= 768;

  navItems: NavItem[] = [
    { label: 'Dashboard', path: '/home', icon: 'fa fa-home' },
    { label: 'Usuários', path: '/users', icon: 'fa fa-users' }
  ];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.auth.getUserName() || 'Usuário';
    this.userEmail = this.auth.getUserEmail() || '';
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd && this.isMobile) {
        this.isMenuOpen = false;
      }
    });
  }

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 768;
    if (!this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigate(path: string): void {
    this.router.navigate([path]);
    if (this.isMobile) {
      this.isMenuOpen = false;
    }
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}

