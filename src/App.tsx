import React, { Suspense } from 'react'
import Router from './routes'
import Loading from './components/Loading'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { RootState, store } from './redux'
import { ConfigProvider } from 'antd'
import { SystemActionType } from './redux/system/action'
import { SystemState } from './redux/system/state'
import { asyncRoutes, IRoute } from './routes/routes'

const App: React.FC = () => {
  const systemStore = useSelector<RootState, SystemState>(
    (state) => state.system
  )
  const dispatch = useDispatch()

  if (systemStore.menus.length === 0) {
    dispatch({
      type: SystemActionType.SET_MENU,
      payload: asyncRoutes
    })
  }

  return (
    <ConfigProvider componentSize="small">
      <div className="app">
        <Suspense fallback={<Loading type={'screen'} size="large" />}>
          <Router />
        </Suspense>
      </div>
    </ConfigProvider>
  )
}

export default App
