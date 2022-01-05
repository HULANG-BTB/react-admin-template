import { lazy } from 'react'

export const layout = {
  BaseLayout: lazy(() => import('./BaseLayout')),
  CardLayout: lazy(() => import('./CardLayout')),
  GridLayout: lazy(() => import('./GridLayout')),
  TreeGridLayout: lazy(() => import('./TreeGridLayout')),
  TreeMultiGridLayout: lazy(() => import('./TreeMultiGridLayout'))
}

export type LayoutComponent = keyof typeof layout
