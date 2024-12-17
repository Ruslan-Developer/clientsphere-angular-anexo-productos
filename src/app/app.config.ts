import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    //Agregar el proveedor de HttpClient para que Angular pueda inyectar el servicio de una API en los componentes
    provideHttpClient(), provideAnimationsAsync(),
  ]
};
