import { multiply } from './multiply';

describe('multiply', () => {
  it('should multiply positive numbers', () => {
    const actualResult = multiply(3, 2);
    const expectedResult = 6;
    
    expect(expectedResult).toBe(actualResult);

    // варианты проверок
    expect({a: 1}).toEqual({a: 1});
    expect([1, 2, 3]).toHaveLength(3);
    expect([1, 2, 3]).toContain(3);
    expect([1, 2, 3]).not.toContain(10);

    expect(undefined).toBeUndefined();
    expect(null).toBeNull();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();

    expect(actualResult).toBeDefined();
    expect(actualResult).toBeTruthy();
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
