import { multiply } from './multiply';

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
