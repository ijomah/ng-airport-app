import { style, animate, trigger, transition, query, group, animateChild, state } from '@angular/animations';

export const animateSize =  trigger('zoominout', [
  state('in', style({
    height: '100px',
  })),
  state('out', style({
     height: '300px',
  })),
  transition('in => out', [

    animate('6s 3s ease-in-out')
  ])
])

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



































  export const anime = trigger('myAnime', [
    transition('login<=>dashboard', [
      style({position: 'relative'}),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [style({left: '-100%'})]),
      query(':leave', animateChild(), {optional: true}),
      group([
        query(':leave', [
          animate('2s 1s ease-out', style({}))
        ]),
        query(':enter', animate('2s 1s ease-out', style({}))),
        query('@*', animateChild())
      ])
    ]),
    transition('*<=>*', [
      style({position: 'relative'}),

    ])
  ])