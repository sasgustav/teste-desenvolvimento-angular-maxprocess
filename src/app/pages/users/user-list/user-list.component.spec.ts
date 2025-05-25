import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserListComponent } from './user-list.component';
import { UserService } from 'src/app/core/user.service';
import { User } from 'src/app/models/user';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let service: jasmine.SpyObj<UserService>;

  const mockUsers: User[] = [
    { id: 1, name: 'John', email: 'john@test.com' } as User,
    { id: 2, name: 'Jane', email: 'jane@test.com' } as User
  ];

  beforeEach(async () => {
    service = jasmine.createSpyObj('UserService', ['getUsers', 'deleteUser']);
    service.getUsers.and.returnValue(of(mockUsers));
    service.deleteUser.and.returnValue(of());

    await TestBed.configureTestingModule({
      declarations: [UserListComponent],
      providers: [
        { provide: UserService, useValue: service },
        ConfirmationService,
        MessageService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users', () => {
    component.loadUsers();
    expect(service.getUsers).toHaveBeenCalled();
    expect(component.users.length).toBe(2);
    expect(component.filteredUsers.length).toBe(2);
    expect(component.loading).toBeFalse();
  });

  it('should filter by name and email', () => {
    component.users = mockUsers;
    component.filterName = 'jane';
    component.filterEmail = 'jane@test.com';
    component.applyFilters();
    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].name).toBe('Jane');
  });

  it('should clear filters', () => {
    component.users = mockUsers;
    component.filterName = 'x';
    component.filterEmail = 'y';
    component.clearFilters();
    expect(component.filterName).toBe('');
    expect(component.filterEmail).toBe('');
    expect(component.filteredUsers.length).toBe(2);
  });

  it('should delete user and reload', () => {
    spyOn(component, 'loadUsers');
    component.deleteUser(mockUsers[0]);
    expect(service.deleteUser).toHaveBeenCalledWith(1);
    expect(component.loadUsers).toHaveBeenCalled();
  });
});
