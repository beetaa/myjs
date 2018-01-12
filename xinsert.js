var _ = require('lodash')

function _insert_ (source, what) {
  var pos = _.random(source.length - 1)
  return source.slice(0, pos) + what + source.slice(pos)
}

/**
 * xinsert(source, whats, count) - 在源字符串中随机插入若干指定字符/字符串
 * - source: 要处理的字符串
 * - whats: 要插入的字符(串)列表
 *    - 如果是字符串，则随机挑选其中字符
 *    - 如果是字符串数组，则随机挑选数组元素
 * - count: 插入数量
 * - return: 返回经处理的字符串
 * 
 * 使用范例:
 * - xinsert('You are awesome!', '1234', 2) => You 4are3 awesome!
 * - xinsert('You are awesome!', ['123', '456'], 2) => You a456re a123wesome!
 */
module.exports = (source, whats, count) => {
  for (let i=0; i<count; i++) {
    source = _insert_(source, _.sample(whats))
  }
  return source
}