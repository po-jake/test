import { animate, style, transition, trigger } from '@angular/animations'

export const animations = {
  fadeInOut: trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0, transform: 'scale(0.95)' }),
      animate(
        '{{delay}}ms ease-out',
        style({ opacity: 1, transform: 'scale(1)' })
      )
    ], { params: { delay: 0 } }),

    transition(':leave', [
      animate('300ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' })),
    ]),
  ]),
}
