/* Desafio 11 - Crie uma função de Número de Telefone

Crie uma função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne um número de telefone, respeitando parênteses, traços e espaços.

Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1], `generatePhoneNumber` deverá retornar `(12) 34567-8901`.

- Se a função receber um array com tamanho diferente de 11, a mesma deve retornar `"Array com tamanho incorreto."`.

- Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3 vezes ou mais, `generatePhoneNumber` deverá retornar a string `"não é possível gerar um número de telefone com esses valores"`. */

function generatePhoneNumber(telefone) {
  // seu código aqui
  let string = telefone.toString();
  let virgula = string.replace(/,/g, '');
  let result = virgula.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
  
  if (telefone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  for (let index = 0; index < telefone.length; index += 1) {
    if (telefone[index] < 0 || telefone[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  
  for (let index = 0; index < telefone.length; index += 1) {
    let repeat = 0;
    for (let index2 = 0; index2 < telefone.length; index2 += 1) {
      if (telefone[index] === telefone[index2]) {
        repeat += 1;
        if (repeat >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }

  if (virgula.length === 11) {
    return result;
  }
}

/* Desafio 12 - Crie uma função de Condição de existência de um triângulo

Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. Crie uma função chamada `triangleCheck` que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha.

Para tanto, tenha em mente algumas considerações:

- Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

- Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.

- O retorno da sua função deverá ser um booleano. */

function triangleCheck(lineA, lineB, lineC) {
    let somaA = lineB + lineC;
    let somaB = lineA + lineC;
    let somaC = lineA + lineB;
    let abA = Math.abs(lineB - lineC);
    let abB = Math.abs(lineA - lineC);
    let abC = Math.abs(lineA - lineB);
  
    if (lineA > somaA || lineB > somaB || lineC > somaC) {
      return false;
    } 
    if (lineA < abA || lineB < abB || lineC < abC) {
      return false;
    }
    return true;
  }
  
/* Desafio 13 - Crie uma função de boas vindas ao Bar da Trybe!

Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

Crie a função `hydrate` que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. */

function hydrate(bebida) {
    // seu código aqui
    let soma = 0;
    const replaced = bebida.match(/\d+/g);
  
    for (let index = 0; index < replaced.length; index += 1) {
      let result = Number(replaced[index]);
      soma += result;
    }
  
    if (soma === 1) {
      return `${soma} copo de água`;
    }
  
    return `${soma} copos de água`;
  }