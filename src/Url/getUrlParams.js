/**
 * 获取url上的参数
 * @returns {{}}
 */
 export default function getParams () {
    const search = window.location.search || window.location.hash
    const str = search.split('?')[1]
    const result = {}
    const kvArr = str.split('&')
    let tmp
  
    kvArr.forEach(kv => {
      tmp = kv.split('=')
      result[decodeURIComponent(tmp[0])] = decodeURIComponent(tmp[1])
    })
  
    return result
  }
  