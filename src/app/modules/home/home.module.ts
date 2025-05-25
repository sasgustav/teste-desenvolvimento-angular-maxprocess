import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/home/home.component';
import { MetricsGridComponent } from './components/metrics-grid/metrics-grid.component';
import { UserChartComponent } from './components/user-chart/user-chart.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [HomeComponent, MetricsGridComponent, UserChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    CardModule,
    ChartModule,
  ],
})
export class HomeModule {}
