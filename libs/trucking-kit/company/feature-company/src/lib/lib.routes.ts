import { Route } from '@angular/router';
import { FeatureCompanyComponent } from './feature-company.component';

export const featureCompanyRoutes: Route[] = [
  {
    path: '',
    component: FeatureCompanyComponent,
    children: [
      {
        path: 'drivers',
        loadChildren: () =>
          import('@trucking-kit/company/feature-drivers').then(
            (m) => m.featureDriversRoutes
          ),
      },
      {
        path: 'trucks',
        loadChildren: () =>
          import('@trucking-kit/company/feature-trucks').then(
            (m) => m.featureTrucksRoutes
          ),
      },
    ],
  },
];
