import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserFilterComponent } from './user-filter.component';

describe('UserFilterComponent', () => {
  let component: UserFilterComponent;
  let fixture: ComponentFixture<UserFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFilterComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter values', () => {
    spyOn(component.filterChange, 'emit');
    component.filterName = 't';
    component.filterEmail = 'e';
    component.apply();
    expect(component.filterChange.emit).toHaveBeenCalledWith({
      name: 't',
      email: 'e',
    });
  });

  it('should clear filters', () => {
    spyOn(component.clear, 'emit');
    component.filterName = 't';
    component.filterEmail = 'e';
    component.clearFilters();
    expect(component.filterName).toBe('');
    expect(component.filterEmail).toBe('');
    expect(component.clear.emit).toHaveBeenCalled();
  });
});
