import { Component, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';

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

  handleItemCommand(item: MenuItem, event: Event): void {
    item.command?.({ originalEvent: event, item });
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
  }

  closeMobileMenu() {
    this.mobileMenuVisible = false;
  }
}
