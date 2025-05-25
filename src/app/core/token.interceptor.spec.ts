import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

describe('TokenInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;
  let router: jasmine.SpyObj<Router>;
  let notification: jasmine.SpyObj<NotificationService>;
  let auth: AuthService;

  beforeEach(() => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    notification = jasmine.createSpyObj('NotificationService', ['showError']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: Router, useValue: router },
        { provide: NotificationService, useValue: notification },
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      ],
    });

    http = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
    auth = TestBed.inject(AuthService);
    localStorage.setItem('token', 'abc.def.ghi');
  });

  afterEach(() => {
    httpMock.verify();
    localStorage.clear();
  });

  it('should add Authorization header', () => {
    http.get('/data').subscribe();
    const req = httpMock.expectOne('/data');
    expect(req.request.headers.get('Authorization')).toBe('Bearer abc.def.ghi');
  });

  it('should logout and redirect on 401', () => {
    spyOn(auth, 'logout');
    http.get('/data').subscribe({ error: () => {} });
    const req = httpMock.expectOne('/data');
    req.flush({}, { status: 401, statusText: 'Unauthorized' });
    expect(auth.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should notify on 403', () => {
    http.get('/data').subscribe({ error: () => {} });
    const req = httpMock.expectOne('/data');
    req.flush({}, { status: 403, statusText: 'Forbidden' });
    expect(notification.showError).toHaveBeenCalledWith('Acesso negado');
  });
});
