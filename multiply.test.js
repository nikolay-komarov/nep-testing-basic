import { multiply } from './multiply';

test('multiply', () => {
  const result = multiply(3, 2);

  expect(result).toBe(6);
});
