import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../core/user.service';
import { User } from '../../../models/user';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  filteredUsers: User[] = [];
  loading = false;
  rows = 10;
  filterName = '';
  filterEmail = '';
  skeletonRows = Array.from({ length: 10 });
  private subscription!: Subscription;

  constructor(
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  loadUsers(): void {
    this.loading = true;
    this.subscription = this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = [...this.users];
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao carregar usuários',
        });
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  applyFilters(): void {
    this.filteredUsers = this.users.filter((u) => {
      const nameMatch = u.name
        ?.toLowerCase()
        .includes(this.filterName.toLowerCase());
      const emailMatch = u.email
        .toLowerCase()
        .includes(this.filterEmail.toLowerCase());
      return nameMatch && emailMatch;
    });
  }

  clearFilters(): void {
    this.filterName = '';
    this.filterEmail = '';
    this.filteredUsers = [...this.users];
  }

  onEdit(user: User): void {
    console.log('Edit', user);
  }

  confirmDelete(user: User): void {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir ${user.name}?`,
      header: 'Confirmar Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Cancelar',
      acceptIcon: '',
      rejectIcon: '',
      defaultFocus: 'reject',
      accept: () => this.deleteUser(user),
    });
  }

  deleteUser(user: User): void {
    if (!user.id) {
      return;
    }
    this.userService.deleteUser(user.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Usuário excluído',
        });
        this.loadUsers();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao excluir usuário',
        });
      },
    });
  }
}
