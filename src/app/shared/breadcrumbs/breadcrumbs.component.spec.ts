import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;
  let events$: Subject<any>;

  beforeEach(async () => {
    events$ = new Subject();
    await TestBed.configureTestingModule({
      declarations: [BreadcrumbsComponent],
      providers: [
        { provide: Router, useValue: { events: events$ } }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build breadcrumbs on navigation', () => {
    events$.next(new NavigationEnd(1, '/users', '/users'));
    expect(component.breadcrumbs.length).toBe(1);
    expect(component.breadcrumbs[0].label).toBe('Usuários');
  });
});
