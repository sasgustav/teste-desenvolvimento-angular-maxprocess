import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() items: MenuItem[] = [];
  @Input() title = 'MaxProcess';
  @Input() userAvatar = '';

  userName = '';
  userEmail = '';
  showMenu = true;
  isMobileMenuOpen = false;
  isMobile = window.innerWidth <= 768;
  isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
  private subscription!: Subscription;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.auth.getUserName() || '';
    this.userEmail = this.auth.getUserEmail() || '';
    this.updateMenuVisibility(this.router.url);
    this.subscription = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(event => this.updateMenuVisibility(event.urlAfterRedirects));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private updateMenuVisibility(url: string): void {
    this.showMenu =
      !url.includes('/auth/login') && !url.includes('/auth/forgot-password');
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  handleItemCommand(item: MenuItem, originalEvent: Event): void {
    item.command?.({ originalEvent, item });
    this.closeMobileMenu();
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
