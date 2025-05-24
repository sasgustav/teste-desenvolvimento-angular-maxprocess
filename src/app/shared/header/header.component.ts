import { Component, Input } from '@angular/core';
import { MenuItem, MenuItemCommandEvent } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() items: MenuItem[] = [];
  @Input() title = 'MaxProcess';
  @Input() userName = 'Gustavo Vasconcelos';
  @Input() userAvatar = 'assets/avatar.png';

  mobileMenuVisible = false;

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
