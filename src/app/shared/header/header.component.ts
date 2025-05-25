// src/app/shared/header/header.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  @Input() title = '';

  userName = '';
  userEmail = '';
  isMenuOpen = false;

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.userName = this.auth.getUserName() || '';
    this.userEmail = this.auth.getUserEmail() || '';
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
    this.isMenuOpen = false;
  }
}
