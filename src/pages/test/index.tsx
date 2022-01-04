import { Button } from 'antd'
import { useLocation } from 'react-router-dom'
import Auth from '../../components/Auth'
import CardLayout from '../../layout/CardLayout'

const Test: React.FC = () => {
  const { pathname } = useLocation()
  return (
    <CardLayout title={'title'} toolbar={<Auth as={Button}>新增</Auth>}>
      {pathname}
    </CardLayout>
  )
}

export default Test
