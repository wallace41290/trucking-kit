import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'tk-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() isLoggedIn: boolean | undefined;
  @Output() logout = new EventEmitter();
}
