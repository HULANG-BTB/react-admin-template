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
    const retRoutes: JSX.Element[] = []
    routes.forEach((route) => {
      const Component = route.component && allComponents[route.component]
      if (route.children) {
        retRoutes.push(
          <Route key={route.path} path={route.path} element={Component ? <Component/> : <Outlet/>}>
            {createRoutes(route.children)}
          </Route>
        )
      } else {
        retRoutes.push(
          <Route
            key={route.path}
            path={route.path}
            element={Component ? <Component/> : null}
          />
        )
      }
    })
    return retRoutes
  }

  return (
    <BrowserRouter>
      <Routes>{createRoutes(routes)}</Routes>
    </BrowserRouter>
  )
}

export default Router
