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
  private subscription!: Subscription;
  constructor(private auth: AuthService, private router: Router) {}

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
}
