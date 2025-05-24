import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}
