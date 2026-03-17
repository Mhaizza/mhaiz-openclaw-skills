const { add, multiply, isEven } = require('../index');

test('adds numbers', () => {
  expect(add(1, 2)).toBe(3);
});

test('multiplies numbers', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('isEven works', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(5)).toBe(false);
});
