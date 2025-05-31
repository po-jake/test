import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { provideRouter, withComponentInputBinding, withNavigationErrorHandler, withRouterConfig } from '@angular/router'

import { routes } from './app.routes'
import { provideMaterialConfig } from './material.provider'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideAnimationsAsync(),
    provideMaterialConfig(),

    provideRouter(
      routes,
      withRouterConfig({ onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' }),
      withComponentInputBinding(),
      withNavigationErrorHandler((ex) => console.log('NavigationError:', ex)),
    ),
  ],
}
