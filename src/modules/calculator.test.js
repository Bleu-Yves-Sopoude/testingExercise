import calculator from './calculator';

describe('addition', () => {
  test('add', () => {
    expect(calculator.add(10, 5)).toBe(15);
  });
  test('add', () => {
    expect(calculator.add(15, 5)).toBe(20);
  });
});

describe('subtraction', () => {
  test('sub', () => {
    expect(calculator.sub(10, 5)).toBe(5);
  });
  test('sub', () => {
    expect(calculator.sub(15, 5)).toBe(10);
  });
});

describe('division', () => {
  test('div', () => {
    expect(calculator.div(10, 5)).toBe(2);
  });
  test('sub', () => {
    expect(calculator.div(15, 5)).toBe(3);
  });
});

describe('multiplication', () => {
  test('mul', () => {
    expect(calculator.mul(10, 5)).toBe(50);
  });
  test('sub', () => {
    expect(calculator.mul(15, 5)).toBe(75);
  });
});