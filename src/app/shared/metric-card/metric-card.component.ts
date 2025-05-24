import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css'],
})
export class MetricCardComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() value: string | number = '';
  @Input() color = '#3f51b5';
}
