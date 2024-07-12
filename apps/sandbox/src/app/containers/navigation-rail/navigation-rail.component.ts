import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TkDestination, TkNavigationRailComponent } from '@shared/ui';
import { TkNavigationRailService } from 'libs/shared/ui/src/lib/navigation-rail/navigation-rail.service';

@Component({
  selector: 'sandbox-navigation-rail',
  standalone: true,
  imports: [CommonModule, TkNavigationRailComponent],
  templateUrl: './navigation-rail.component.html',
  styleUrl: './navigation-rail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NavigationRailComponent implements OnInit, OnDestroy {
  railService = inject(TkNavigationRailService);
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

  ngOnInit(): void {
    this.railService.setAction({
      icon: 'add',
      tooltip: 'Add the thing!',
      action: () => {
        console.log('Stuff is about to get added!');
      },
      color: 'accent',
    });
  }

  ngOnDestroy(): void {
    this.railService.resetAction();
  }
}
