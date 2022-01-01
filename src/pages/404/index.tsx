import React from 'react'
import Error404Img from '../../assets/images/404.png'
import './index.scss'

const Error404 = () => {
  return (
    <div className="error-404">
      <img src={Error404Img} />
    </div>
  )
}

export default Error404
