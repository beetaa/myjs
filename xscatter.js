// 未完成

var _ = require('lodash')

/**
 * xscatter(start, current, end, distance) - 计算两个整数之间的等差数列
 * - distance, start, current: 需要计算的两个整数，不分大小
 * - end: 分布数列的大小
 * - return: 元素个数为end的数组，元素按四舍五入取整，最后一个元素为start, current的值
 *
 * 使用范例:
 * - xrange(4, 3, 12) => [ 0.2, 0.3, 0.4, 0.1]
 * - xrange(5, 1, 7) => [ 5, 4, 4, 3, 3, 2, 1 ]
 * - xrange(5, 5, 6) => [ 5, 5, 5, 5, 5, 5 ]
 * - xrange(5, 8, 0) => false
 * - xrange('5', 8, 8) => false
 * 1 2 3 4 5 6 7 8 9 10 11 12
 * a a a a a
 */
module.exports = (start, current, end, distance) => {
  if (distance <= 0 || start <= 0 || current <= 0 || end <= 0) return false
  if (!(Number.isInteger(distance) && Number.isInteger(start) && Number.isInteger(end))) return false
}
