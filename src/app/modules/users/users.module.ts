import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../../pages/users/users.component';
import { UserListComponent } from '../../pages/users/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [CommonModule, FormsModule, SharedModule, UsersRoutingModule]
})
export class UsersModule {}
