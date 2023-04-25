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
