/* Desafio 1 - Crie uma função usando o operador &&

JavaScript possui um operador lógico `&&`, o qual recebe dois valores e retorna `true` se ambos os valores são verdadeiros, e retorna `false` se algum dos valores não o for.

Considerando isso, implemente na função `compareTrue`, um código que ao receber dois parâmetros booleanos deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.

Faça a função somente utilizando o operador `&&`. */

function compareTrue(valor1, valor2) {
    // seu código aqui
    if (valor1 === true && valor2 === true) {
      return true;
    }
    return false;
  }

/* Desafio 2 - Crie uma função que calcule a área de um triângulo

  Escreva uma função com o nome `calcArea` que receba um valor de base (chamado `base`) e outro de altura (chamado `height`) de um triângulo e retorne o cálculo da sua área. */

function calcArea(base, height) {
    // seu código aqui
    let mult = base * height;
    let resultado = mult / 2;
    return resultado;
}
  
/* Desafio 3 - Crie uma função que divida a frase

Escreva uma função com o nome `splitSentence`, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original. */

function splitSentence(frase) {
    // seu código aqui
    let resultado = frase.split(' ');
    return resultado;
}

/* Desafio 4 - Crie uma função que use concatenação de strings

Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array. */

function concatName(lista) {
    // seu código aqui
    let primeiroElemento = lista[0];
    let ultimoElemento = lista.pop();
    let resultado = `${ultimoElemento}, ${primeiroElemento}`;
    return resultado;
}