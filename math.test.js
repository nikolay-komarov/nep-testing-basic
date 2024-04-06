import { divide, multiply, sum } from './math';

describe('math', () => {
  describe('divide', () => {
    it.each([
      { inputA: 6, inputB: 2, expected: 3 },
      { inputA: 100, inputB: 10, expected: 10 },
      { inputA: 10, inputB: 0, expected: Infinity },
    ])('should $inputA devide $inputB to equals $expected', 
      ({ inputA, inputB, expected }) => {
        const actualResult = divide(inputA, inputB);

        expect(actualResult).toBe(expected);  
      }
    );
  });

  describe('multiply', () => {
    it('should multiply positive numbers', () => {
      const actualResult = multiply(3, 2);
      const expectedResult = 6;
      
      expect(actualResult).toBe(expectedResult);
    });
  
    it('should multiply negative numbers', () => {
      const actualResult = multiply(-3, -2);
      const expectedResult = 6;
      
      expect(actualResult).toBe(expectedResult);
    });
  
    it('should multiply positive and negative numbers', () => {
      const actualResult = multiply(3, -2);
      const expectedResult = -6;
      
      expect(actualResult).toBe(expectedResult);
    });
  });

  describe('sum', () => {
    it('should sum two digits', () => {
      const actualResult = sum(6, 2);
      const expectedResult = 8;
      
      expect(actualResult).toBe(expectedResult);
    });
  });
});
