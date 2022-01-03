/**
 *
 * 获取uuid
 *
 * @returns 长度为32的uuid
 */
export const uuid = () => {
  const url = URL.createObjectURL(new Blob([]))
  const id = url.substring(url.length - 36)
  URL.revokeObjectURL(url)
  return id
}
