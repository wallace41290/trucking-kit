import { Route } from '@angular/router';
import { FeatureTasksComponent } from './feature-tasks.component';

export const featureTasksRoutes: Route[] = [
  {
    path: '',
    component: FeatureTasksComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('@trucking-kit/dashboard/feature-task').then(
            (m) => m.featureTaskRoutes
          ),
      },
    ],
  },
];
