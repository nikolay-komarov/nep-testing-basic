import { divide, multiply, sum } from './math';

describe('math', () => {
  describe('divide', () => {
    it('should devide positive number', () => {
      const actualResult = divide(6, 2);
      const expectedResult = 3;
      
      expect(expectedResult).toBe(actualResult);
    });

    it('should return Infinity dividing by 0', () => {
      const actualResult = divide(6, 0);
      const expectedResult = Infinity;
      
      expect(expectedResult).toBe(actualResult);
    });
  });

  describe('multiply', () => {
    it('should multiply positive numbers', () => {
      const actualResult = multiply(3, 2);
      const expectedResult = 6;
      
      expect(expectedResult).toBe(actualResult);
    });
  
    it('should multiply negative numbers', () => {
      const actualResult = multiply(-3, -2);
      const expectedResult = 6;
      
      expect(expectedResult).toBe(actualResult);
    });
  
    it('should multiply positive and negative numbers', () => {
      const actualResult = multiply(3, -2);
      const expectedResult = -6;
      
      expect(expectedResult).toBe(actualResult);
    });
  });

  describe('sum', () => {
    it('should sum two digits', () => {
      const actualResult = sum(6, 2);
      const expectedResult = 8;
      
      expect(expectedResult).toBe(actualResult);
    });
  });
});
