import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';
import { AuthService } from './core/auth.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let routerEvents$: Subject<any>;
  let auth: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    routerEvents$ = new Subject();
    auth = jasmine.createSpyObj('AuthService', ['logout']);
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: Router, useValue: { events: routerEvents$, navigate: () => {} } },
        { provide: AuthService, useValue: auth }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide header on auth pages', () => {
    routerEvents$.next(new NavigationEnd(1, '/auth/login', '/auth/login'));
    expect(component.showHeader).toBeFalse();
  });

  it('should show header on other pages', () => {
    component.showHeader = false;
    routerEvents$.next(new NavigationEnd(1, '/home', '/home'));
    expect(component.showHeader).toBeTrue();
  });

  it('should call logout and navigate', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    component.logout();
    expect(auth.logout).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
  });
});
