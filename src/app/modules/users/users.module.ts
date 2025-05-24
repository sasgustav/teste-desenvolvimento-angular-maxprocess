import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserListContainerComponent } from './containers/user-list-container/user-list-container.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserFilterComponent,
    UserTableComponent,
    UserListContainerComponent,
  ],
  imports: [CommonModule, FormsModule, SharedModule, UsersRoutingModule]
})
export class UsersModule {}
