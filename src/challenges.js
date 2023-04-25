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

/* Desafio 5 - Crie uma função que calcule a quantidade de pontos no futebol

Escreva uma função com o nome `footballPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `wins`) e o número de empates (esse parâmetro deverá se chamar `ties`) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto. */

function footballPoints(wins, ties) {
    // seu código aqui
    let resultado = wins * 3 + ties;
    return resultado;
}

/* Desafio 6 - Crie uma função que calcule a repetição do maior número

Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete. */

function highestCount(numeros) {
    // seu código aqui
    // fiz uma constante que resevou o numero maior
    const numero = Math.max(...numeros);
    let contador = 0;
    for (const compara of numeros) {
      if (compara === numero) { // a comparacao entre as 2 constantes
        contador += 1; // contador contou cada constante
      }
    }
    return contador;
}