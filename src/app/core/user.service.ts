import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
  private api = `${environment.apiBase}/usuario`;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
