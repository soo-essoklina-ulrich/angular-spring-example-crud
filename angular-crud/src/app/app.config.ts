import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Nora from '@primeng/themes/nora'
import Lara from '@primeng/themes/lara'
import Aura from '@primeng/themes/aura'
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    providePrimeNG(
      {
        theme:{
          preset: Lara
          // preset: Lara
          // preset: Lara
        }
      }
    )
  ]
};
