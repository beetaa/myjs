const xrange = require('../xrange')

test('xrange(1, 5, 9) 返回的数组应当包含9个元素', () => {
  expect(xrange(1, 5, 9).length).toBe(9)
})

test('xrange(3, 7, 5) 应当包含 3 和 7', () => {
  expect(xrange(3, 7, 5)).toContain(3)
  expect(xrange(3, 7, 5)).toContain(7)
})