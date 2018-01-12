var _ = require('lodash')

function _surround_ (word, tag) {
  return '<' + tag + '>' + word + '</' + tag + '>';
}

function _isSurrounded_ (word, tag) {
  return word.indexOf('<' + tag) > -1;
}

/**
 * xsurround(source, tag, count) - 在源字符串中随机抽取若干单词被指定标签包裹
 * - source: 要处理的源字符串
 * - tag: 标签，实际生成 <tag></tag> 形式
 * - count: 要包裹的单词数量
 * - return: 返回经处理的字符串
 * 
 * 使用范例:
 * - xsurround('You are awesome.', 'red', 2) => 'You <red>are</red> <red>awesome</red>'
 * 
 * 增强:
 * - 避免一个单词同时被多个标签包裹
 */
module.exports = (source, tag, count) => {
  var words = source.split(' ')
  if (count > words.length) count = words.length
  while (1) {
    if (count <= 0) return words.join(' ')
    var pos = _.random(words.length - 1)
    var word = words[pos]
    if (!_isSurrounded_(word, tag)) {
      words[pos] = _surround_(word, tag)
      count--
    }
  }
}