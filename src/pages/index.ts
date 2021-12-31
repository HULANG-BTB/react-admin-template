import {lazy} from 'react'

export const components = {
  Home: lazy(() => import('./home')),
  Test: lazy(() => import('./test')),
  Login: lazy(() => import('./login')),
  Error404: lazy(() => import('./404'))
}

export type RouteComponent = keyof typeof components
