import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom'
import React from 'react'
import { IRoute, staticRoutes } from './routes'
import { layout } from '../layout'
import { components } from '../pages'
import { useSelector } from 'react-redux'
import { RootState } from '../redux'
import { MenuState, Permission } from '../redux/menu/state'
import { uuid } from '../utils/string'

const allComponents = {
  ...layout,
  ...components
}

const Router: React.FC = () => {
  const menuState = useSelector<RootState, MenuState>((state) => state.menu)

  const createRoutes = (routes: IRoute[]) => {
    return routes.map((route) => {
      if (route.redirect) {
        return (
          <Route
            key={uuid()}
            path={route.path}
            element={<Navigate to={route.redirect} />}
          />
        )
      }
      const Component = route.component && allComponents[route.component]
      if (route.children) {
        return (
          <Route
            key={uuid()}
            path={route.path}
            element={Component ? <Component /> : <Outlet />}
          >
            <Route
              key={route.path}
              path={route.path}
              element={<Navigate to={route.children[0].path} />}
            ></Route>
            {createRoutes(route.children)}
          </Route>
        )
      }
      return (
        <Route
          key={uuid()}
          path={route.path}
          element={Component ? <Component /> : null}
        />
      )
    })
  }

  const generateAsyncRoutes = (data: Permission[]) => {
    return data
      .filter((item) => item.function)
      .map((item): IRoute => {
        return {
          path: item.function?.code.replaceAll(':', '-') || '',
          title: item.name,
          component: 'Test'
        }
      })
  }

  const asyncTreeRoutes: IRoute[] = [
    {
      path: '/',
      title: '',
      component: 'BaseLayout',
      children: generateAsyncRoutes(menuState.menus)
    }
  ]

  const routes: IRoute[] = [...asyncTreeRoutes, ...staticRoutes]

  return (
    <BrowserRouter>
      <Routes>{createRoutes(routes)}</Routes>
    </BrowserRouter>
  )
}

export default Router
