import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { MessageModule } from 'primeng/message';
import { ChartModule } from 'primeng/chart';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { FooterComponent } from './footer/footer.component';
import { MetricCardComponent } from './metric-card/metric-card.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    FooterComponent,
    MetricCardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    MenuModule,
    SidebarModule,
    MessageModule,
    ChartModule,
    ConfirmDialogModule,
    ToastModule,
    SkeletonModule,
  ],
  exports: [
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    MenuModule,
    SidebarModule,
    MessageModule,
    ChartModule,
    ConfirmDialogModule,
    ToastModule,
    SkeletonModule,
    FooterComponent,
    MetricCardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
  ],
})
export class SharedModule {}
