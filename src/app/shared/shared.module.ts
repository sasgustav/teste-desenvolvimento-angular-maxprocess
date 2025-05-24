import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { ChartModule } from 'primeng/chart';
import { FooterComponent } from './footer/footer.component';
import { MetricCardComponent } from './metric-card/metric-card.component';

@NgModule({
  declarations: [FooterComponent, MetricCardComponent],
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    MessageModule,
    ChartModule,
  ],
  exports: [
    TableModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    MessageModule,
    ChartModule,
    FooterComponent,
    MetricCardComponent,
  ],
})
export class SharedModule {}
