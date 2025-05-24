import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../core/user.service';
import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    service = jasmine.createSpyObj('UserService', ['getUsers']);
    service.getUsers.and.returnValue(of([{ login: 't', email: 't@test.com' }]));

    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [SharedModule],
      providers: [{ provide: UserService, useValue: service }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users on init', () => {
    expect(service.getUsers).toHaveBeenCalled();
    expect(component.usuarios.length).toBe(1);
  });
});
