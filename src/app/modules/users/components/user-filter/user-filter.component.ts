import { Component, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFilterComponent {
  filterName = '';
  filterEmail = '';

  @Output() filterChange = new EventEmitter<{ name: string; email: string }>();
  @Output() clear = new EventEmitter<void>();

  apply(): void {
    this.filterChange.emit({ name: this.filterName, email: this.filterEmail });
  }

  clearFilters(): void {
    this.filterName = '';
    this.filterEmail = '';
    this.clear.emit();
  }
}
