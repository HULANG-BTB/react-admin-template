import { Breadcrumb } from 'antd'
import React from 'react'
import { useMatch } from 'react-router-dom'
import { asyncRoutes, IRoute } from '../../routes/routes'

const BreadCrumb: React.FC = () => {
  const createBreadCrumb = (routes: IRoute[]): React.ReactNode[] => {
    const ret: React.ReactNode[] = []
    routes
      .filter((route) => route.hidden !== true)
      .map((route) => {
        const matched = useMatch({
          path: route.path,
          end: false
        })

        if (matched) {
          ret.push(
            <Breadcrumb.Item key={route.path}>{route.title}</Breadcrumb.Item>
          )
        }

        if (route.children) {
          ret.push(...createBreadCrumb(route.children))
        }
      })
    return ret
  }

  const breadCrumb = createBreadCrumb(asyncRoutes)

  return <Breadcrumb className="app-breadcrumb">{breadCrumb}</Breadcrumb>
}

export default BreadCrumb
