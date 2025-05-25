import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { LoginFormComponent } from '../../modules/auth/components/login-form/login-form.component';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    auth = jasmine.createSpyObj('AuthService', [
      'login',
      'getToken',
      'isTokenExpired',
    ]);
    router = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, LoginFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login and navigate on success', () => {
    auth.login.and.returnValue(of({}));
    component.login({ username: 'user', password: 'pass', remember: true });
    expect(auth.login).toHaveBeenCalledWith('user', 'pass');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should show error on failure', () => {
    auth.login.and.returnValue(throwError(() => new Error()));
    component.login({ username: 'user', password: 'pass', remember: false });
    expect(component.error).toBe('Credenciais inválidas');
  });

  it('should pre-fill stored username', () => {
    localStorage.setItem('rememberedUsername', 'stored');
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const form = fixture.debugElement.query(
      By.directive(LoginFormComponent)
    ).componentInstance as LoginFormComponent;
    expect(form.username).toBe('stored');
    localStorage.removeItem('rememberedUsername');
  });
});
