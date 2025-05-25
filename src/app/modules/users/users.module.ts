import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFilterComponent } from './components/user-filter/user-filter.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserListComponent } from '../../pages/users/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    UserFilterComponent,
    UserTableComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    UsersRoutingModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    SkeletonModule,
  ],
})
export class UsersModule {}
