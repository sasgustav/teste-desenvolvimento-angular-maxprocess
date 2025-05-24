import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
    <p-table [value]="usuarios">
      <ng-template pTemplate="header">
        <tr><th>Login</th><th>Email</th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-user>
        <tr><td>{{user.login}}</td><td>{{user.email}}</td></tr>
      </ng-template>
    </p-table>
  `
})
export class UsersComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://localhost:5001/api/usuario').subscribe(data => {
      this.usuarios = data;
    });
  }
}
