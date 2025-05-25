import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: jasmine.SpyObj<Router>;
  let auth: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);
    auth = jasmine.createSpyObj('AuthService', [
      'getUserName',
      'getUserEmail',
      'logout',
    ]);
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        { provide: Router, useValue: router },
        { provide: AuthService, useValue: auth },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu', () => {
    component.isMenuOpen = false;
    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();
  });

  it('should close menu on navigate when mobile', () => {
    component.isMobile = true;
    component.isMenuOpen = true;
    component.navigate('/home');
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should call logout and navigate', () => {
    component.isMobile = false;
    component.logout();
    expect(auth.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });

  it('should update mobile state and close menu on resize', () => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    component.isMenuOpen = true;
    component.onResize();
    expect(component.isMobile).toBeTrue();
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 1024 });
    component.isMenuOpen = true;
    component.onResize();
    expect(component.isMobile).toBeFalse();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should close menu on escape when mobile', () => {
    component.isMobile = true;
    component.isMenuOpen = true;
    component.onEscape();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should keep menu open on escape when not mobile', () => {
    component.isMobile = false;
    component.isMenuOpen = true;
    component.onEscape();
    expect(component.isMenuOpen).toBeTrue();
  });
});
