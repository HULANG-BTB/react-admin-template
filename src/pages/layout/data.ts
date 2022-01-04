export const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

export const data: any = Array.from({ length: 100 }).map((item, i) => {
  return {
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  }
})

export const treeData: any[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true
          },
          {
            title: 'leaf',
            key: '0-0-0-1'
          }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: 'sss',
            key: '0-0-1-0'
          }
        ]
      }
    ]
  }
]
