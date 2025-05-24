import { Component, Input, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  @Input() title = 'MaxProcess';
  @Input() userAvatar = '';

  userName = '';
  userEmail = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.userName = this.auth.getUserName() || '';
    this.userEmail = this.auth.getUserEmail() || '';
  }

  isMobileMenuOpen = false;
  isMobile = window.innerWidth <= 768;
  isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.isMobile = width <= 768;
    this.isTablet = width > 768 && width <= 1024;
  }

  @HostListener('document:keydown.escape')
  onEsc() {
    this.closeMobileMenu();
  }

  handleItemCommand(item: MenuItem, originalEvent: Event): void {
    const event: MenuItemCommandEvent = { originalEvent, item };
    item.command?.(event);
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
