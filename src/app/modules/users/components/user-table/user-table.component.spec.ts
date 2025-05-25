import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserTableComponent } from './user-table.component';
import { User } from 'src/app/models/user';

describe('UserTableComponent', () => {
  let component: UserTableComponent;
  let fixture: ComponentFixture<UserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit edit event', () => {
    spyOn(component.edit, 'emit');
    const user = { id: 1 } as User;
    component.edit.emit(user);
    expect(component.edit.emit).toHaveBeenCalledWith(user);
  });

  it('should emit delete event', () => {
    spyOn(component.delete, 'emit');
    const user = { id: 2 } as User;
    component.delete.emit(user);
    expect(component.delete.emit).toHaveBeenCalledWith(user);
  });
});
