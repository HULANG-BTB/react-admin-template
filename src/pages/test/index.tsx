import { useLocation } from 'react-router-dom'

const Test: React.FC = () => {
  const { pathname } = useLocation()
  return <div>{pathname}</div>
}

export default Test
