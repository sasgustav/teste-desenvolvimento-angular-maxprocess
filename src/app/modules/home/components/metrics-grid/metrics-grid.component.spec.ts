import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MetricsGridComponent } from './metrics-grid.component';

describe('MetricsGridComponent', () => {
  let component: MetricsGridComponent;
  let fixture: ComponentFixture<MetricsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetricsGridComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card for each metric', () => {
    component.metrics = [
      { title: 'Users', value: 10, icon: 'user', color: 'red' },
      { title: 'Sales', value: 5, icon: 'cart', color: 'blue' }
    ] as any;
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('app-metric-card'));
    expect(cards.length).toBe(2);
  });
});
