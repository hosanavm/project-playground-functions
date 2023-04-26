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

/* Desafio 9 - Crie uma função que Codifique e Decodifique

Crie duas funções: a primeira deverá se chamar `encode` e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

Ou seja, caso o parâmetro de `encode` seja `"hi there!"`, o retorno deverá ser `"h3 th2r2!"`.

A segunda função deverá se chamar `decode` e faz o contrário de `encode` - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de `decode` seja `"h3 th2r2!"`, o retorno deverá ser `"hi there!"`). */

function encode(codigo) {
    // seu código aqui
    let array = '';
    for (let code of codigo) {
      if (code === 'a') {
        array += '1';
      } else if (code === 'e') {
        array += '2';
      } else if (code === 'i') {
        array += '3';
      } else if (code === 'o') {
        array += '4';
      } else if (code === 'u') {
        array += '5';
      } else {
        array += code;
      }
    }
    return array;
}

function decode(codigoInvert) {
    // seu código aqui
    let array = '';
    for (let code of codigoInvert) {
      if (code === '1') {
        array += 'a';
      } else if (code === '2') {
        array += 'e';
      } else if (code === '3') {
        array += 'i';
      } else if (code === '4') {
        array += 'o';
      } else if (code === '5') {
        array += 'u';
      } else {
        array += code;
      }
    }
    return array;
}

/* Desafio 10 - Crie uma função de Lista de Tecnologias

Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado `name` com um nome.

Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

```
{
  tech: "NomeTech",
  name: name
}
```

Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo `tech` no objeto.

A saída da sua função deve ser uma lista de objetos ordenada pelo campo `tech` dos objetos com o formato acima. */

function techList(technologies, name) {
    // seu código aqui
    technologies.sort();
    let array = [];
    for (let index = 0; index < technologies.length; index += 1) {
      let object = {
        tech: technologies[index],
        name,
      };
      array.push(object);
    }
    if (array.length === 0) {
      return 'Vazio!';
    }
    return array;
}