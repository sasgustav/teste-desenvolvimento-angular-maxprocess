import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UserChartComponent } from './user-chart.component';

describe('UserChartComponent', () => {
  let component: UserChartComponent;
  let fixture: ComponentFixture<UserChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserChartComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render chart element', () => {
    const chart = fixture.debugElement.query(By.css('p-chart'));
    expect(chart).toBeTruthy();
  });
});
