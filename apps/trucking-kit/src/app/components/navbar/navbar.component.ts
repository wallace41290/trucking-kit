import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { RouterModule } from '@angular/router';

interface Route {
  name: string;
  path: string;
}

@Component({
  selector: 'tk-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Output() logout = new EventEmitter();

  routes: Route[] = [
    { name: 'Home', path: '/home' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Company', path: '/company' },
    { name: 'Products', path: '/products' },
    { name: 'Profile', path: '/profile-edit' },
  ];
}
