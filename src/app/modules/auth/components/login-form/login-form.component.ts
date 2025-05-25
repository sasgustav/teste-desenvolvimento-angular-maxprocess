import {
  Component,
  EventEmitter,
  Output,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  username = '';
  password = '';
  remember = false;
  @Input() error = '';
  @Input() loading = false;

  @Output() login = new EventEmitter<{
    username: string;
    password: string;
    remember: boolean;
  }>();

  submit(): void {
    this.login.emit({
      username: this.username,
      password: this.password,
      remember: this.remember,
    });
  }
}
