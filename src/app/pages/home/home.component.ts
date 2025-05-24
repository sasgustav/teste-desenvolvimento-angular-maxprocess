import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  chartData = {
    labels: ['Usuário A', 'Usuário B', 'Usuário C'],
    datasets: [
      { label: 'Acessos', data: [5, 10, 7] }
    ]
  };
}
