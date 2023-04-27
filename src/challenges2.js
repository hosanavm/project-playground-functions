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