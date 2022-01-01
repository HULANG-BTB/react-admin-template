import { lazy } from 'react'

export const layout = {
  BaseLayout: lazy(() => import('./BaseLayout'))
}

export type LayoutComponent = keyof typeof layout
