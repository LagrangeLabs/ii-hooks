/**
 * 获取页面 query 参数
 * @returns {Partial<T>}
 */
const useQuery = <T extends Record<string, string> = {}>(
  locationSearch?: string,
): Partial<T> => {
  const url = locationSearch || location.search
  const strObj: Record<string, string> = {}
  if (url.includes('?')) {
    const strs = url.slice(url.indexOf('?') + 1).split('&')
    strs.forEach(str => {
      strObj[str.split('=')[0]] = str.split('=')?.[1]
    })
  }
  return strObj as Partial<T>
}

export default useQuery
