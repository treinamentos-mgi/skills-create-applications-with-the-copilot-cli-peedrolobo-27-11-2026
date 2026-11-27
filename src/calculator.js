#!/usr/bin/env node
/**
 * Calculadora CLI
 *
 * Operações suportadas:
 *  - addition       (+)  soma
 *  - subtraction    (-)  subtração
 *  - multiplication (×)  multiplicação
 *  - division       (÷)  divisão (erro em divisão por zero)
 *
 * Uso:
 *  node src/calculator.js <operação> <a> <b>
 *  node src/calculator.js addition 2 3
 *  node src/calculator.js 8 / 2
 */

// Soma: a + b
function addition(a, b) {
  return a + b;
}

// Subtração: a - b
function subtraction(a, b) {
  return a - b;
}

// Multiplicação: a × b
function multiplication(a, b) {
  return a * b;
}

// Divisão: a ÷ b
function division(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }
  return a / b;
}

// Módulo: resto da divisão de a por b
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Módulo por zero não é permitido.');
  }
  return a % b;
}

// Potência: base elevada a exponent
function power(base, exponent) {
  return base ** exponent;
}

// Raiz quadrada: √n
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Não é possível calcular a raiz quadrada de número negativo.');
  }
  return Math.sqrt(n);
}

const operations = {
  addition,
  subtraction,
  multiplication,
  division,
  '+': addition,
  '-': subtraction,
  '*': multiplication,
  x: multiplication,
  '/': division,
};

function main(args) {
  // Aceita "<operação> <a> <b>" ou "<a> <símbolo> <b>"
  let [op, a, b] = args;
  if (op !== undefined && !(op in operations) && args.length === 3) {
    [a, op, b] = args;
  }

  const fn = operations[op];
  const x = Number(a);
  const y = Number(b);

  if (!fn || args.length !== 3 || Number.isNaN(x) || Number.isNaN(y)) {
    console.error('Uso: node src/calculator.js <addition|subtraction|multiplication|division> <a> <b>');
    process.exit(1);
  }

  try {
    console.log(fn(x, y));
  } catch (err) {
    console.error(`Erro: ${err.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main(process.argv.slice(2));
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
