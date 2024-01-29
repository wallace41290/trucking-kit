import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { Amplify } from 'aws-amplify';
import amplifyconfig from '@shared/backend/amplifyconfiguration';

if (environment.production) {
  enableProdMode();
}

Amplify.configure(amplifyconfig);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
