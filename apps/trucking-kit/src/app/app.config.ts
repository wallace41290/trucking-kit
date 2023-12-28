import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { COGNITO_CONFIG } from '@shared/models';
import { environment } from '../environments/environment';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(),
    provideStore(),
    { provide: COGNITO_CONFIG, useValue: environment.cognito },
    provideRouter(appRoutes),
  ],
};
