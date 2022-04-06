/**
 @param {String} time 时间
*/
export default getTime = (time) => {
    const da = new Date(time)
    const year = da.getFullYear()
    const month = da.getMonth() + 1
    const date = da.getDate()
    const ti = da.getHours()
    const min = da.getMinutes()
    return `${[year, month, date].join('/')  }  ${  ti  }:${ min.toString().length===1?`0${min}`: min}`
}