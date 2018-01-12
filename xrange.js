var _ = require('lodash')

/**
 * 计算两个整数之间的等差数列
 * @param {number} start - 起始数
 * @param {number} end - 终止数
 * @param {number} count - 数列元素数量
 * @return {array} 元素个数为count的数组，元素按四舍五入取整，最后一个元素为参数end的值
 * @example
 *  xrange(1, 5, 9) => [ 1, 1, 2, 2, 3, 3, 4, 4, 5 ]
 *  xrange(5, 1, 7) => [ 5, 4, 4, 3, 3, 2, 1 ]
 *  xrange(5, 5, 6) => [ 5, 5, 5, 5, 5, 5 ]
 *  xrange(5, 8, 0) => false
 *  xrange('5', 8, 8) => false
 */
module.exports = (start, end, count) => {
  if (count <= 0) return false
  if (!(Number.isInteger(start) && Number.isInteger(end) && Number.isInteger(count))) return false
  start = Math.ceil(start)
  end = Math.ceil(end)
  count = Math.ceil(count)
  if (start === end) {
    return _.map(_.range(count), e => start)
  } else {
    let stepSize = (end - start) / count
    let series = _.map(_.range(start, end, stepSize), e => Math.round(e))
    if (_.last(series) !== end) {
      series.pop()
      series.push(end)
    }
    return series
  }
}