import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../../pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForgotPasswordLinkComponent } from './components/forgot-password-link/forgot-password-link.component';
import { SocialLoginButtonsComponent } from './components/social-login-buttons/social-login-buttons.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    ForgotPasswordLinkComponent,
    SocialLoginButtonsComponent,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule,
    InputTextModule,
    PasswordModule,
    CheckboxModule,
    ButtonModule,
    MessageModule,
  ]
})
export class AuthModule {}
