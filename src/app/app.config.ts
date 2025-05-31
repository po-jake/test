import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideRouter, withComponentInputBinding, withNavigationErrorHandler, withRouterConfig } from '@angular/router'

import { routes } from './app.routes'
import { provideMaterialConfig } from './material.provider'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideMaterialConfig(),

    provideRouter(
      routes,
      withComponentInputBinding(),
      withNavigationErrorHandler((e) => console.log('NavigationError:', e)),
      withRouterConfig({ onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' }),
    ),
  ],
}
