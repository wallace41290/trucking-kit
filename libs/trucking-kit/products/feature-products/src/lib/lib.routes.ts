import { Route } from '@angular/router';
import { FeatureProductsComponent } from './feature-products.component';

export const featureProductsRoutes: Route[] = [
  {
    path: '',
    component: FeatureProductsComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('@trucking-kit/dashboard/feature-product').then(
            (m) => m.featureProductRoutes
          ),
      },
    ],
  },
];
