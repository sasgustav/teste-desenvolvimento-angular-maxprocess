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

  constructor(private message: MessageService) {}

  send(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.message.add({ severity: 'success', summary: 'Link enviado' });
      this.email = '';
    }, 1000);
  }
}
