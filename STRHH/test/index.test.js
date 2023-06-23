const halfHalf = require('../main/index');

test('half half function', async () => {
  expect(halfHalf('noticeable')).toBe('ntc');
});