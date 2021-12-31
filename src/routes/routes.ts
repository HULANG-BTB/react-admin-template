import {RouteComponent} from '../pages'
import {LayoutComponent} from "../layout";

import * as Icon from '@ant-design/icons'

export type IconType = keyof typeof Icon

export interface IRoute {
  path: string
  title: string // 标题
  icon?: IconType // 图标
  component?: RouteComponent | LayoutComponent // 组件
  query?: string // 查询参数
  hidden?: boolean// 是否隐藏
  needLogin?: boolean // 需要登录
  children?: IRoute[]
}

export const staticRoutes: IRoute[] = [
  {
    path: '/login',
    title: '登录',
    hidden: true,
    component: 'Login'
  }
]

export const asyncRoutes: IRoute[] = [
  {
    path: '/dashboard',
    title: '首页',
    icon: 'HomeOutlined',
    component: 'Home'
  },
  {
    path: '/test',
    title: '测试',
    icon: 'AccountBookFilled',
    component: 'Test'
  },
  {
    path: '/nest-1',
    title: 'nest 1',
    icon: 'AimOutlined',
    children: [
      {
        path: '/nest-1/nest-1-1',
        title: 'nest 1-1',
        children: [
          {
            path: '/nest-1/nest-1-1/nest-1-1-1',
            title: 'nest 1-1-1',
            component: 'Test'
          }
        ]
      },
      {
        path: '/nest-1/nest-1-2',
        title: 'nest 1-2',
        children: [
          {
            path: '/nest-1/nest-1-2/nest-1-2-1',
            title: 'nest 1-2-1',
            component: 'Test'
          },
          {
            path: '/nest-1/nest-1-2/nest-1-2-2',
            title: 'nest 1-2-2',
            component: 'Test'
          }
        ]
      }
    ]
  }
]

export const errorRoutes: IRoute[] = [
  {
    path: '*',
    title: 'page not found',
    hidden: true,
    component: 'Error404'
  }
]

export const routes: IRoute[] = [
  ...staticRoutes,
  {
    path: '/',
    title: '',
    component: 'BaseLayout',
    children: asyncRoutes
  },
  ...errorRoutes
]
