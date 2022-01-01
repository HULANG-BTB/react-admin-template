import React, { Suspense } from 'react'
import Router from './routes'
import Loading from './components/Loading'

const App: React.FC = () => {
  return (
    <div className="app">
      <Suspense fallback={<Loading type={'screen'} size="large" />}>
        <Router />
      </Suspense>
    </div>
  )
}

export default App
