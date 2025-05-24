import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<p-chart type="bar" [data]="chartData"></p-chart>'
})
export class HomeComponent {
  chartData = {
    labels: ['Usuário A', 'Usuário B', 'Usuário C'],
    datasets: [
      { label: 'Acessos', data: [5, 10, 7] }
    ]
  };
}
