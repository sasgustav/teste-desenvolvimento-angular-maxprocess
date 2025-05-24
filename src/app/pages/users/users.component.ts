import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../core/user.service';
import { User } from '../../models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  usuarios: User[] = [];
  private subscription!: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.subscription = this.userService.getUsers().subscribe((data: User[]) => {
      this.usuarios = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
