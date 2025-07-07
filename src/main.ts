import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {Feed} from './app/feed/feed';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


