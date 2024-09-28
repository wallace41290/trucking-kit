import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { TkInfoPillComponent, TkPillTabsDirective } from '@shared/ui';
import { Route } from '@shared/models';

@Component({
  selector: 'tk-feature-company',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    RouterModule,
    TkInfoPillComponent,
    TkPillTabsDirective,
  ],
  templateUrl: './feature-company.component.html',
  styleUrl: './feature-company.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCompanyComponent {
  routes: Route[] = [
    { label: 'Trucks', path: 'trucks' },
    { label: 'Drivers', path: 'drivers' },
  ];

  // TODO: pull in and insert company details
}
