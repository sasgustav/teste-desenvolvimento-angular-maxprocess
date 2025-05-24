import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    MessageModule
  ],
  exports: [
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    MessageModule
  ]
})
export class SharedModule {}
