import { toUpper, toLower, len } from './strings';

describe('strings', () => {
  describe('toUpper', () => {
    it.each([
      { str: 'string', expected: 'STRING' },
      { str: 'STRING', expected: 'STRING' },
      { str: 'String', expected: 'STRING' },
    ])
    ('should transfer string $str to upper case string $expected', (
      { str, expected }
    ) => {
      const actualResult = toUpper(str);

      expect(actualResult).toBe(expected);
    });
  });

  describe('toLower', () => {
    it.each([
      { str: 'string', expected: 'string' },
      { str: 'STRING', expected: 'string' },
      { str: 'String', expected: 'string' },
    ])
    ('should transfer string $str to lower case string $expected', (
      { str, expected }
    ) => {
      const actualResult = toLower(str);

      expect(actualResult).toBe(expected);
    });
  });

  describe('len', () => {
    it.each([
      { str: 'string', expected: 6 },
      { str: '', expected: 0 },
      { str: 'Looong String', expected: 13 },
    ])
    ('should calculate length string $str to $expected', (
      { str, expected }
    ) => {
      const actualResult = len(str);

      expect(actualResult).toBe(expected);
    });
  });
});
