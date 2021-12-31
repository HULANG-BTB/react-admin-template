import React from 'react';
import {SpinProps, Spin} from "antd";
import './index.scss'

export interface Props extends SpinProps {
  type?: 'screen' | 'container'
}

const Loading = (props: Props) => {
  const {type, ...restProps} = props
  return (
    <div className={`loading loading-${type || 'container'}`}>
      <Spin {...restProps}/>
    </div>
  )
}

export default Loading
