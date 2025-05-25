import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/core/user.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserListContainerComponent } from './user-list-container.component';

describe('UserListContainerComponent', () => {
  let component: UserListContainerComponent;
  let fixture: ComponentFixture<UserListContainerComponent>;
  let service: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    service = jasmine.createSpyObj('UserService', ['getUsers', 'deleteUser']);
    service.getUsers.and.returnValue(of([]));
    service.deleteUser.and.returnValue(of(null));

    await TestBed.configureTestingModule({
      declarations: [UserListContainerComponent],
      providers: [
        { provide: UserService, useValue: service },
        ConfirmationService,
        MessageService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    expect(service.getUsers).toHaveBeenCalled();
  });

  it('should filter users', () => {
    component.users = [
      { id: 1, name: 'Test', email: 'a@test.com' } as any,
      { id: 2, name: 'Foo', email: 'b@bar.com' } as any
    ];
    component.onFilter({ name: 't', email: '' });
    expect(component.filteredUsers.length).toBe(1);
  });
});
