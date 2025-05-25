// src/app/modules/auth/forgot-password/forgot-password.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MessageService],
})
export class ForgotPasswordComponent {
  email = '';
  loading = false;

  constructor(public messageService: MessageService) {}

  send(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Link enviado',
        detail: 'Confira seu e-mail (demo).',
      });
      this.email = '';
    }, 1000);
  }
}
