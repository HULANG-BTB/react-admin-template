import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

const Redirect: React.FC = () => {
  const params = useParams()
  const to = `/${params['*']}`
  return <Navigate to={to} />
}

export default Redirect
