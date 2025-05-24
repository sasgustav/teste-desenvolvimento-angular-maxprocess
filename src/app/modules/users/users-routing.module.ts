import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListContainerComponent } from './containers/user-list-container/user-list-container.component';
import { AuthGuard } from '../../core/auth.guard';

const routes: Routes = [
  { path: '', component: UserListContainerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
