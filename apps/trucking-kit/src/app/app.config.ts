import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { COGNITO_CONFIG } from '@shared/models';
import { environment } from '../environments/environment';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { ngrxFormsEffects, ngrxFormsFeature } from '@shared/forms';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  errorHandlerEffects,
  errorHandlerFeature,
  errorHandlingInterceptor,
} from '@shared/error-handler';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { API_URL } from '@shared/http-client';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: COGNITO_CONFIG, useValue: environment.cognito },
    provideRouter(
      appRoutes,
      withViewTransitions(),
      withComponentInputBinding()
    ),
    provideStore({
      errorHandler: errorHandlerFeature.reducer,
      ngrxForms: ngrxFormsFeature.reducer,
    }),
    provideEffects(errorHandlerEffects, ngrxFormsEffects),
    provideRouterStore(),
    provideHttpClient(withInterceptors([errorHandlingInterceptor])),
    !environment.production ? provideStoreDevtools() : [],
    { provide: API_URL, useValue: environment.apiUrl },
  ],
};
