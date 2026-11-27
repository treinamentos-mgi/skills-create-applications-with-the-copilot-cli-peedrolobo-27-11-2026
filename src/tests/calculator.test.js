const { addition, subtraction, multiplication, division } = require('../calculator');

describe('addition', () => {
  test('2 + 3 = 5', () => expect(addition(2, 3)).toBe(5));
  test('números negativos', () => expect(addition(-2, -3)).toBe(-5));
  test('positivo com negativo', () => expect(addition(5, -8)).toBe(-3));
  test('zero é elemento neutro', () => expect(addition(7, 0)).toBe(7));
  test('decimais', () => expect(addition(0.1, 0.2)).toBeCloseTo(0.3));
  test('números grandes', () => expect(addition(1e15, 1e15)).toBe(2e15));
});

describe('subtraction', () => {
  test('10 - 4 = 6', () => expect(subtraction(10, 4)).toBe(6));
  test('resultado negativo', () => expect(subtraction(4, 10)).toBe(-6));
  test('números negativos', () => expect(subtraction(-5, -3)).toBe(-2));
  test('subtrair zero', () => expect(subtraction(9, 0)).toBe(9));
  test('decimais', () => expect(subtraction(0.3, 0.1)).toBeCloseTo(0.2));
});

describe('multiplication', () => {
  test('45 * 2 = 90', () => expect(multiplication(45, 2)).toBe(90));
  test('sinais diferentes', () => expect(multiplication(-3, 4)).toBe(-12));
  test('dois negativos', () => expect(multiplication(-3, -4)).toBe(12));
  test('multiplicar por zero', () => expect(multiplication(123, 0)).toBe(0));
  test('um é elemento neutro', () => expect(multiplication(8, 1)).toBe(8));
  test('decimais', () => expect(multiplication(2.5, 4)).toBe(10));
});

describe('division', () => {
  test('20 / 5 = 4', () => expect(division(20, 5)).toBe(4));
  test('resultado decimal', () => expect(division(1, 4)).toBe(0.25));
  test('sinais diferentes', () => expect(division(-10, 2)).toBe(-5));
  test('dois negativos', () => expect(division(-10, -2)).toBe(5));
  test('zero dividido por número', () => expect(division(0, 5)).toBe(0));
  test('divisão por zero lança erro', () => {
    expect(() => division(10, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('0 / 0 lança erro', () => {
    expect(() => division(0, 0)).toThrow();
  });
});
