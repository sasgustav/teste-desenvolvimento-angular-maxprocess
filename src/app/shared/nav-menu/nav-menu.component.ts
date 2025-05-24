import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMenuComponent {
  @Input() items: MenuItem[] = [];
  @Output() itemSelect = new EventEmitter<MenuItem>();

  onCommand(item: MenuItem, event: Event): void {
    item.command?.({ originalEvent: event, item });
    this.itemSelect.emit(item);
  }
}
