import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from 'react-router-dom'
import React from 'react'
import { IRoute, staticRoutes } from './routes'
import BaseLayout from '../layout/BaseLayout'
import { useSelector } from 'react-redux'
import { RootState } from '../redux'
import { SystemState } from '../redux/system/state'

const Router: React.FC = () => {
  const systemStore = useSelector<RootState, SystemState>(
    (state) => state.system
  )

  const createRoutes = (routes: IRoute[]) => {
    return routes.map((route) => {
      if (route.redirect) {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Navigate to={route.redirect} />}
          />
        )
      }
      if (route.external === true) {
        return null
      }
      if (route.children) {
        return (
          <Route key={route.path} path={route.path} element={<Outlet />}>
            <Route
              key={route.path}
              path={route.path}
              element={<Navigate to={route.children[0].path} />}
            />
            {createRoutes(route.children)}
          </Route>
        )
      }
      return (
        <Route key={route.path} path={route.path} element={<BaseLayout />} />
      )
    })
  }

  const routes = [
    {
      path: '/',
      title: '',
      children: systemStore.menus
    },
    ...staticRoutes
  ]

  return (
    <BrowserRouter>
      <Routes>
        {/* {asyncRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<BaseLayout />}
            />
          )
        })} */}
        {createRoutes(routes)}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
