import { Component } from '@angular/core';
import { ChartRow } from '../../models/chart-row';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  chartRows: ChartRow[] = [
    { label: 'Usuário A', value: 5 },
    { label: 'Usuário B', value: 10 },
    { label: 'Usuário C', value: 7 }
  ];
}
