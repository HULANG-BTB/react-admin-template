import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom'
import React from 'react'
import { IRoute, routes } from './routes'
import { layout } from '../layout'
import { components } from '../pages'
import { uuid } from '../utils/string'

const allComponents = {
  ...layout,
  ...components
}

const Router: React.FC = () => {
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
      if (route.external === true) {
        return null
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

  return (
    <BrowserRouter>
      <Routes>{createRoutes(routes)}</Routes>
    </BrowserRouter>
  )
}

export default Router
