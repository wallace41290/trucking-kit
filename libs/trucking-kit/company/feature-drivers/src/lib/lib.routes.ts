import { Route } from '@angular/router';
import { FeatureDriversComponent } from './feature-drivers.component';

export const featureDriversRoutes: Route[] = [
  {
    path: '',
    component: FeatureDriversComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('@trucking-kit/company/feature-driver').then(
            (m) => m.featureDriverRoutes
          ),
      },
    ],
  },
];
