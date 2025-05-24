import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  chartData: ChartData<'bar'> = {
    labels: ['Usuário A', 'Usuário B', 'Usuário C'],
    datasets: [
      {
        label: 'Acessos',
        data: [5, 10, 7],
        backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726']
      }
    ]
  };
}
