import moment from "moment"
/** 
 * 格式化日期
 @param {string} date 日期
 @param {string} format 格式
*/
const  formatDate = (date, format = 'YYYY/MM/DD HH:mm:ss') => {
    if (!date) return date
    return moment(date).format(format)
}

export default formatDate