import { Route } from '@angular/router';
import { FeatureTrucksComponent } from './feature-trucks.component';

export const featureTrucksRoutes: Route[] = [
  {
    path: '',
    component: FeatureTrucksComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('@trucking-kit/company/feature-truck').then(
            (m) => m.featureTruckRoutes
          ),
      },
    ],
  },
];
