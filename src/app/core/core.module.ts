import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';
import { TokenInterceptor } from './token.interceptor';
import { MessageService } from 'primeng/api';
import { NotificationService } from './notification.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    MessageService,
    NotificationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
})
export class CoreModule {}
