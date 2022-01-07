import { Dropdown, Menu, Tabs } from 'antd'
import React, { Suspense } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { components } from '../../pages'
import { RootState } from '../../redux'
import { SystemActionType } from '../../redux/system/action'
import { SystemState } from '../../redux/system/state'

const Content: React.FC = (props) => {
  const systemStore = useSelector<RootState, SystemState>(
    (state) => state.system
  )
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onChange = (activeKey: string) => {
    navigate(activeKey)
    dispatch({
      type: SystemActionType.SET_TAG_VIEW,
      payload: activeKey
    })
  }

  const remove = (targetKey: string) => {
    // 删除的是当前激活 需要跳转
    if (targetKey === systemStore.currentTagView) {
      const index = systemStore.tagViews.findIndex(
        (item) => item.path === targetKey
      )
      navigate(systemStore.tagViews[index - 1].path)
    }
    dispatch({
      type: SystemActionType.REMOVE_TAG_VIEW,
      payload: targetKey
    })
  }

  const onEdit = (targetKey: any, action: 'add' | 'remove') => {
    switch (action) {
      case 'add':
        break
      case 'remove':
        remove(targetKey)
        break
      default:
        break
    }
  }

  const contextMenu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  )

  return (
    <div className="app-content">
      <Tabs
        className="tag-views-container"
        hideAdd
        onChange={onChange}
        activeKey={systemStore.currentTagView}
        type="editable-card"
        onEdit={onEdit}
        renderTabBar={(props, DefaultTabBar) => {
          return <DefaultTabBar {...props} />
        }}
      >
        {systemStore.tagViews.map((tagView) => {
          const Component = tagView.component && components[tagView.component]
          return (
            <Tabs.TabPane
              className="route-tab-pane"
              tab={tagView.title}
              key={tagView.path}
              closable={!tagView.affix || systemStore.tagViews.length === 1}
            >
              <Suspense fallback={<Loading />}>
                {Component ? <Component /> : null}
              </Suspense>
            </Tabs.TabPane>
          )
        })}
      </Tabs>
    </div>
  )
}

export default Content
