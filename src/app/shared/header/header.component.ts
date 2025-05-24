import { Component, Input, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  @Input() title = 'MaxProcess';
  @Input() userAvatar = '';

  userName = '';
  userEmail = '';
  isMobileMenuOpen = false;
  isMobile = window.innerWidth <= 768;
  isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userName = this.auth.getUserName() || '';
    this.userEmail = this.auth.getUserEmail() || '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.isMobile = width <= 768;
    this.isTablet = width > 768 && width <= 1024;
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeMobileMenu();
  }

  handleItemCommand(item: MenuItem, originalEvent: Event): void {
    item.command?.({ originalEvent, item });
    this.closeMobileMenu();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
