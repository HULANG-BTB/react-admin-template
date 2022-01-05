import { Button, Checkbox } from 'antd'
import React, { useState } from 'react'
import Auth from '../../components/Auth'
import GridLayout from '../../layout/GridLayout'

const Permission: React.FC = (props) => {
  const [permissions, setPermissions] = useState<string[]>([])

  function onChange(checkedValues: any[]) {
    setPermissions(checkedValues)
  }

  const plainOptions = ['add', 'edit', 'delete']

  return (
    <GridLayout>
      <Checkbox.Group options={plainOptions} onChange={onChange} />
      <div>当前权限：{JSON.stringify(permissions)}</div>
      <div>
        按钮权限：
        <Auth
          as={Button}
          auth={() => {
            return permissions.includes('add')
          }}
        >
          新增
        </Auth>
        <Auth
          as={Button}
          auth={() => {
            return permissions.includes('edit')
          }}
        >
          修改
        </Auth>
        <Auth
          as={Button}
          auth={() => {
            return permissions.includes('delete')
          }}
        >
          删除
        </Auth>
      </div>
      <div>
        带有fallback的权限：
        <Auth
          as={Button}
          auth={() => {
            return permissions.includes('add')
          }}
          fallback={'没有add权限'}
        >
          新增
        </Auth>
        <Auth
          as={Button}
          auth={() => {
            return permissions.includes('edit')
          }}
          fallback={'没有edit权限'}
        >
          修改
        </Auth>
        <Auth
          as={Button}
          auth={() => {
            return permissions.includes('delete')
          }}
          fallback={'没有delete权限'}
        >
          删除
        </Auth>
      </div>
    </GridLayout>
  )
}

export default Permission
