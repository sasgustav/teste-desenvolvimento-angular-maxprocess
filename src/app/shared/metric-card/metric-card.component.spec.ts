import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardModule } from 'primeng/card';
import { MetricCardComponent } from './metric-card.component';

describe('MetricCardComponent', () => {
  let component: MetricCardComponent;
  let fixture: ComponentFixture<MetricCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetricCardComponent],
      imports: [CardModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricCardComponent);
    component = fixture.componentInstance;
    component.title = 'Test';
    component.value = 1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
