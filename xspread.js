var _ = require('lodash');

/**
 * xspread(total, count) - 计算随机分布数列
 * - total: 可以进行分配的总数
 * - count: 要分配的对象数量
 * - return: 元素个数为count的数组，每个元素代表分配到的数量
 * 
 * 使用范例:
 * - xspread(5, 4) => [ 0, 1, 0, 4 ]
 * - xspread(2, 9) => [ 0, 0, 1, 1, 0, 0, 0, 0, 0 ]
 * - xspread(10, 0) => false
 * - xspread('10', 5) => false
 */
module.exports = (total, count) => {
  if (count <= 0 || total <= 0) return false
  if (!_.isNumber(total) || !_.isNumber(count)) return false
  total = Math.ceil(total)
  count = Math.ceil(count)
  var series = new Array(count)
  series = _.map(series, e => 0)
  for (let i=0; i<total; i++) {
    let pos = _.random(count - 1)
    series[pos] += 1
  }
  return series
}