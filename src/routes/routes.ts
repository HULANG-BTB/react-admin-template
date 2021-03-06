import { RouteComponent } from '../pages'

import * as Icon from '@ant-design/icons'

export type IconType = keyof typeof Icon

export interface IRoute {
  path: string
  title: string // 标题
  icon?: IconType // 图标
  component?: RouteComponent // 组件
  query?: string // 查询参数
  hidden?: boolean // 是否隐藏
  redirect?: string // 重定向地址
  needLogin?: boolean // 需要登录,
  external?: boolean // 是否为外部地址（新窗口打开）
  noCache?: boolean // 如果为 true 切换时组件会被销毁
  affix?: boolean // 如果为 true 菜单会固定打tag-views
  children?: IRoute[]
}

export const staticRoutes: IRoute[] = [
  {
    path: '/login',
    title: '登录',
    hidden: true,
    component: 'Login',
    needLogin: false
  },
  {
    path: '/404',
    title: 'Page Not Found',
    hidden: true,
    component: 'Error404',
    needLogin: false
  },
  {
    path: '/redirect/*',
    title: 'Redirect',
    hidden: true,
    component: 'Redirect',
    needLogin: false
  },
  {
    path: '*',
    title: 'page not found',
    hidden: true,
    redirect: '/404',
    needLogin: false
  }
]

export const asyncRoutes: IRoute[] = [
  {
    path: '/dashboard',
    title: '仪表盘',
    icon: 'DashboardOutlined',
    component: 'Home',
    affix: true
  },
  {
    path: '/layout',
    title: '布局',
    icon: 'LayoutOutlined',
    children: [
      {
        path: '/layout/card-layout',
        title: '带标题栏列表',
        component: 'CardLayoutExample'
      },
      {
        path: '/layout/simple-grid',
        title: '无分页无搜索列表',
        component: 'SimpleGridLayoutExample'
      },
      {
        path: '/layout/search-grid',
        title: '无分页有搜索列表',
        component: 'SearchGridLayoutExample'
      },
      {
        path: '/layout/search-page-grid',
        title: '有分页有搜索列表',
        component: 'SearchPageGridLayoutExample'
      },
      {
        path: '/layout/tree-simple',
        title: '左边树无分页无搜索列表',
        component: 'TreeSimpleGridExample'
      },
      {
        path: '/layout/tree-search',
        title: '左边树无分页有搜索列表',
        component: 'TreeSearchGridExample'
      },
      {
        path: '/layout/tree-search-page',
        title: '左边树有分页有搜索列表',
        component: 'TreeSearchPageGridExample'
      },
      {
        path: '/layout/tree-multi-grid',
        title: '左边树上下主从表',
        component: 'TreeMultiGridExample'
      }
    ]
  },
  {
    path: '/permission',
    title: '权限测试',
    icon: 'LockOutlined',
    component: 'PermissionTest'
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
          },
          ...Array.from({ length: 20 }).map(
            (item, index): IRoute => ({
              path: `/nest-1/nest-1-2/nest-1-2-${3 + index}`,
              title: `nest 1-2-${3 + index}`,
              component: 'Test'
            })
          )
        ]
      }
    ]
  },
  {
    path: 'http://baidu.com',
    title: '外部链接',
    icon: 'LinkOutlined',
    external: true
  }
]

export const routes: IRoute[] = [
  ...staticRoutes,
  {
    path: '/',
    title: '',
    children: asyncRoutes
  }
]
