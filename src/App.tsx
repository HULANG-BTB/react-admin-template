import {BaseLayout} from './layout'
import {BrowserRouter as Router} from 'react-router-dom'
import React from "react";

const App: React.FC = () => {

  return (
    <Router>
      <BaseLayout/>
    </Router>
  )
}

export default App
