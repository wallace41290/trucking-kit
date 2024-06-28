import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sandbox-nav',
  templateUrl: './sandbox-nav.component.html',
  styleUrl: './sandbox-nav.component.css',
  standalone: true,
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
})
export class SandboxNavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  routeItems: RouteItem[] = [
    { label: 'Destination Link', routerLink: 'destination-link' },
    { label: 'Navigation Rail', routerLink: 'navigation-rail' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
}

interface RouteItem {
  routerLink: string;
  label: string;
}
