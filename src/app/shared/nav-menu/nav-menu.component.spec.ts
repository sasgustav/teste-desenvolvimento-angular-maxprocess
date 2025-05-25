import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';
import { NavMenuComponent } from './nav-menu.component';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavMenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on item command', () => {
    const item: MenuItem = { label: 'Home' };
    spyOn(component.itemSelect, 'emit');
    const event = new Event('click');
    component.onCommand(item, event);
    expect(component.itemSelect.emit).toHaveBeenCalledWith(item);
  });
});
