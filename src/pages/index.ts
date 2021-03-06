import { lazy } from 'react'

export const components = {
  Home: lazy(() => import('./home')),
  Test: lazy(() => import('./test')),
  Login: lazy(() => import('./login')),
  Error404: lazy(() => import('./404')),
  Redirect: lazy(() => import('./redirect')),
  CardLayoutExample: lazy(() => import('./layout/card')),
  SimpleGridLayoutExample: lazy(() => import('./layout/simple')),
  SearchGridLayoutExample: lazy(() => import('./layout/search')),
  SearchPageGridLayoutExample: lazy(() => import('./layout/search-page')),
  TreeSimpleGridExample: lazy(() => import('./layout/tree')),
  TreeSearchGridExample: lazy(() => import('./layout/tree-search')),
  TreeSearchPageGridExample: lazy(() => import('./layout/tree-search-page')),
  TreeMultiGridExample: lazy(() => import('./layout/tree-multi-grid')),
  PermissionTest: lazy(() => import('./permission'))
}

export type RouteComponent = keyof typeof components
