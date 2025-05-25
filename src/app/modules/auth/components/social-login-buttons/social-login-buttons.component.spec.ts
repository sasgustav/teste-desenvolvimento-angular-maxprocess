import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialLoginButtonsComponent } from './social-login-buttons.component';

describe('SocialLoginButtonsComponent', () => {
  let component: SocialLoginButtonsComponent;
  let fixture: ComponentFixture<SocialLoginButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialLoginButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialLoginButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
