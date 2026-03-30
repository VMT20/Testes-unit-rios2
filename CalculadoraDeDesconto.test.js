const CalculadoraDeDesconto = require('./CalculadoraDeDesconto');

describe('Testes da Calculadora de Desconto', () => {
  const calc = new CalculadoraDeDesconto();

  test('Teste 1: Sem desconto (valor < 100)', () => {
    expect(calc.calcular(50)).toBe(50); // [cite: 31, 32]
  });

  test('Teste 2: Desconto de 10% (valor entre 100 e 500)', () => {
    expect(calc.calcular(200)).toBe(180); // [cite: 34, 35]
  });

  test('Teste 3: Desconto de 20% (valor > 500)', () => {
    expect(calc.calcular(600)).toBe(480); // [cite: 37, 38]
  });

  test('Teste 4: Cliente VIP (desconto base + 5%)', () => {
    expect(calc.calcular(200, true)).toBe(170); // [cite: 40, 41]
  });

  test('Teste 5: Valor negativo (deve lançar erro)', () => {
    expect(() => calc.calcular(-100)).toThrow("Valor não pode ser negativo"); // [cite: 44, 45]
  });
});