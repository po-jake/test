import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/library/pages/library.component').then(m => m.LibraryComponent),
  },
]
