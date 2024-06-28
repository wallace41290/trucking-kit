import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TkDestination, TkNavigationRailComponent } from '@shared/ui';

@Component({
  selector: 'sandbox-navigation-rail',
  standalone: true,
  imports: [CommonModule, TkNavigationRailComponent],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NavigationRailComponent {
  destinations: TkDestination[] = [
    {
      label: 'Home',
      icon: 'home',
      route: './',
    },
    {
      label: 'About',
      icon: 'info',
      route: './about',
    },
    {
      label: 'Contact',
      icon: 'email',
      route: './contact',
    },
  ];
}
