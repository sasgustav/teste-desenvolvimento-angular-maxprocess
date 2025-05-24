import { Component } from '@angular/core';
import { ChartData } from 'chart.js';
import { Metric } from '../../models/metric';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  metrics: Metric[] = [
    {
      title: 'Novos Usuários',
      value: 1250,
      icon: 'fa-solid fa-user-plus',
      color: '#42A5F5',
    },
    {
      title: 'Vendas',
      value: 'R$ 12.400',
      icon: 'fa-solid fa-shopping-cart',
      color: '#66BB6A',
    },
    {
      title: 'Satisfação',
      value: '95%',
      icon: 'fa-solid fa-face-smile',
      color: '#FFA726',
    },
    {
      title: 'Tempo Online',
      value: '2h 30m',
      icon: 'fa-regular fa-clock',
      color: '#AB47BC',
    },
  ];

  chartData: ChartData<'bar'> = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Novos Usuários',
        data: [150, 200, 180, 220, 300, 250],
        backgroundColor: '#42A5F5',
      },
    ],
  };
}
