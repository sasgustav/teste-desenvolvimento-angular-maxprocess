import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Metric } from '../../../../models/metric';

@Component({
  selector: 'app-metrics-grid',
  templateUrl: './metrics-grid.component.html',
  styleUrls: ['./metrics-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MetricsGridComponent {
  @Input() metrics: Metric[] = [];
}
