import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.userName = 'John';
    component.userEmail = 'john@test.com';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user info', () => {
    const nameEl = fixture.debugElement.query(
      By.css('.username')
    ).nativeElement;
    const emailEl = fixture.debugElement.query(By.css('.email')).nativeElement;
    expect(nameEl.textContent).toContain('John');
    expect(emailEl.textContent).toContain('john@test.com');
  });
});
