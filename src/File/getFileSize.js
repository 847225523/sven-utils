/**
 * 文件大小显示
 * @param {Number} size 文件大小
 * @param {Number} toFixedNum 保留几位小数
 * @returns
 */
 const getFileSize = (size, toFixedNum = 1) => {
    if (!size) return '0 B'
  
    const s = 1024
    const sizes = ['B', 'K', 'M', 'G', 'T']
    let i = Math.floor(Math.log(size) / Math.log(s))
  
    if (i > sizes.length - 1) {
      i = sizes.length - 1
    }
  
    size = (size / Math.pow(s, i)).toFixed(toFixedNum)
  
    if (!sizes[i] || !size) return '0 B'
  
    return size + sizes[i]
  }

  export default getFileSize