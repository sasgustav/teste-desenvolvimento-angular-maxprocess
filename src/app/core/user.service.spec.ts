import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from '../../environments/environment';
import { User } from '../models/user';

describe('UserService', () => {
  let service: UserService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });
    service = TestBed.inject(UserService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should fetch users', () => {
    const mock: User[] = [{ id: 1, email: 't@test.com' } as User];
    service.getUsers().subscribe((users) => expect(users).toEqual(mock));
    const req = http.expectOne(`${environment.apiBase}/users`);
    expect(req.request.method).toBe('GET');
    req.flush(mock);
  });

  it('should delete user', () => {
    service.deleteUser(1).subscribe();
    const req = http.expectOne(`${environment.apiBase}/users/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
