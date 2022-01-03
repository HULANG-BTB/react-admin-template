import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'

const Content: React.FC = (props) => {
  return (
    <div className="app-content">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Content
