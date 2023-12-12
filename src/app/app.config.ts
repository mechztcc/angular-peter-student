import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HttpHandlerInterceptor } from './core/interceptors/http-request.interceptor';
import { WindowService } from './core/services/window/window.service';

export const appConfig: ApplicationConfig = {
  providers: [
    WindowService,
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withInterceptors([HttpHandlerInterceptor]), withFetch()),
  ],
};
