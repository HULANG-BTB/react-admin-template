import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import React from "react";
import {IRoute, routes} from "./routes";
import {layout} from "../layout";
import {components} from "../pages";

const allComponents = {
  ...layout,
  ...components
}

const Router: React.FC = () => {

  const createRoutes = (routes: IRoute[]) => {
    return routes.map(route => {
      const Component = route.component && allComponents[route.component]
      if (route.children) {
        return (
          <Route key={route.path} path={route.path} element={Component ? <Component/> : <Outlet/>}>
            {createRoutes(route.children)}
          </Route>
        )
      }
      return (
        <Route
          key={route.path}
          path={route.path}
          element={Component ? <Component/> : null}
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
