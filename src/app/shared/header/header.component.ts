import { Component, Input, HostListener } from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() items: MenuItem[] = [];
  @Input() title = 'MaxProcess';
  @Input() userName = 'Gustavo Vasconcelos';
  @Input() userAvatar = '';

  mobileMenuVisible = false;
  isMobile = window.innerWidth <= 768;
  isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    this.isMobile = width <= 768;
    this.isTablet = width > 768 && width <= 1024;
  }

  handleItemCommand(item: MenuItem, originalEvent: Event): void {
    const event: MenuItemCommandEvent = { originalEvent, item };
    item.command?.(event);
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }

  closeMobileMenu() {
    this.mobileMenuVisible = false;
  }
}
