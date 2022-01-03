/**
 *
 * 扁平数据转换为树形数据
 *
 * @param data Array<any> 带有id和pid的原始扁平数组
 * @param pid any 父目录id 默认 null
 * @returns Array<any> 返回带有children的数组
 */
export const arrayToTree = (data: any[], pid: any = null) => {
  const ret: any = []
  data.forEach((item) => {
    if (item.id === pid) {
      const children = arrayToTree(data, item.id)
      if (children.length) {
        item.children = children
      }
      ret.push(item)
    }
  })
  return ret
}

/**
 *
 * 树形数据转换为扁平数据
 *
 * @param data 属带有children的树形数据
 * @returns 返回扁平后的数组
 */
export const treeToArray = (data: any[]) => {
  const ret: any = []
  data.forEach((item) => {
    ret.push(item)
    if (item.children?.length) {
      ret.push(...treeToArray(item.children))
    }
  })
  return ret
}
