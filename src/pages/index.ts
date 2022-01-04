import { lazy } from 'react'

export const components = {
  Home: lazy(() => import('./home')),
  Test: lazy(() => import('./test')),
  Login: lazy(() => import('./login')),
  Error404: lazy(() => import('./404')),
  Redirect: lazy(() => import('./redirect')),
  CardLayoutExample: lazy(() => import('./layout/card')),
  SimpleGridLayoutExample: lazy(() => import('./layout/simple'))
}

export type RouteComponent = keyof typeof components
