import { style, animate, trigger, transition, useAnimation, query, group, animateChild } from '@angular/animations';

export const animateView =
  trigger('routeToLoginWithAnimation', [
    transition('loginPage <=> dashboardPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ], {optional: true}),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('2s ease-out', style({ left: '100%' }))
        ], {optional: true}),
        query(':enter', [
          animate('2s ease-out', style({ left: '0%' }))
        ]),
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('1s ease-out', style({ left: '100%', opacity: 0 }))
        ], {optional: true}),
        query(':enter', [
          animate('2s ease-out', style({ left: '0%' }))
        ]),
        query('@*', animateChild())
      ]),
    ])
  ]);