import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should save token on login', () => {
    service.login('demo-gustavo@gmail.com', '123456').subscribe();
    const req = httpMock.expectOne(`${environment.apiBase}/auth/signin`);
    req.flush({ token: 'test-token' });
    expect(localStorage.getItem('token')).toBe('test-token');
  });

  it('should return stored token', () => {
    localStorage.setItem('token', 'abc');
    expect(service.getToken()).toBe('abc');
  });
});
