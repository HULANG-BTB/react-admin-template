import React, { Suspense } from 'react'
import Router from './routes'
import Loading from './components/Loading'
import { Provider } from 'react-redux'
import { store } from './redux'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Suspense fallback={<Loading type={'screen'} size="large" />}>
          <Router />
        </Suspense>
      </div>
    </Provider>
  )
}

export default App
