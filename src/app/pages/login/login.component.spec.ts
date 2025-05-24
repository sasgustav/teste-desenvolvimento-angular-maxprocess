import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AuthService } from '../../core/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let auth: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    auth = jasmine.createSpyObj('AuthService', ['login', 'getToken']);
    router = jasmine.createSpyObj('Router', ['navigate']);
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: [
        { provide: AuthService, useValue: auth },
        { provide: Router, useValue: router }
      ]
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
    component.username = 'user';
    component.password = 'pass';
    component.login();
    expect(auth.login).toHaveBeenCalledWith('user', 'pass');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should show error on failure', () => {
    auth.login.and.returnValue(throwError(() => new Error()));
    component.username = 'user';
    component.password = 'pass';
    component.login();
    expect(component.error).toBe('Credenciais inválidas');
  });
});
