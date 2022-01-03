import { lazy } from 'react'

export const layout = {
  BaseLayout: lazy(() => import('./BaseLayout')),
  CardLayout: lazy(() => import('./CardLayout'))
}

export type LayoutComponent = keyof typeof layout
