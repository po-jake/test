import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core'
import { provideRouter, withComponentInputBinding, withNavigationErrorHandler, withRouterConfig } from '@angular/router'

import { routes } from './app.routes'
import { provideMaterialConfig } from './material.provider'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideMaterialConfig(),

    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' }),
      withComponentInputBinding(),
      withNavigationErrorHandler((ex) => console.log('NavigationError:', ex)),
    ),
  ],
}
