import React, { Suspense } from 'react'
import Router from './routes'
import Loading from './components/Loading'
import { Provider } from 'react-redux'
import { store } from './redux'
import { ConfigProvider } from 'antd'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider componentSize="small">
        <div className="app">
          <Suspense fallback={<Loading type={'screen'} size="large" />}>
            <Router />
          </Suspense>
        </div>
      </ConfigProvider>
    </Provider>
  )
}

export default App
