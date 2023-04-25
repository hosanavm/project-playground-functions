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

/* Desafio 7 - Crie uma função de Caça ao Rato

Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão caçando um mesmo rato chamado `mouse`. Imagine que os animais estão em uma reta, cada um em uma posição representada por um número.

Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, calcule as distâncias entre o rato e cada um dos gatos, em seguida, retorne qual dos felinos irá alcançar o rato primeiro (aquele que estiver mais perto do rato). */

function catAndMouse(mouse, cat1, cat2) {
    // seu código aqui
    if (cat1 > 0 && cat2 > cat1) {
      return 'cat1';
    } if (cat2 > 0 && cat1 > cat2) {
      return 'cat2';
    }
    return 'os gatos trombam e o rato foge';
}

/* Desafio 8 - Crie uma função FizzBuzz

Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

- Para cada número do Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
- Para cada número do Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`; */

function fizzBuzz(numeros) {
    // seu código aqui
    let resultado = [];
    for (let index = 0; index < numeros.length; index += 1) {
      if (numeros[index] % 15 === 0) {
        resultado.push('fizzBuzz');
      } else if (numeros[index] % 5 === 0) {
        resultado.push('buzz');
      } else if (numeros[index] % 3 === 0) {
        resultado.push('fizz');
      } else {
        resultado.push('bug!');
      }
    }
    return resultado;
}