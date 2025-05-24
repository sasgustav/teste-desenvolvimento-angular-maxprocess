import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserChartComponent {
  @Input() data!: ChartData<'bar'>;
}
