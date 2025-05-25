import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private messageService: MessageService) {}

  showError(summary: string, detail?: string): void {
    this.messageService.add({ severity: 'error', summary, detail });
  }
}
