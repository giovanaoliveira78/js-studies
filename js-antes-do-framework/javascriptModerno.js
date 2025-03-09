// ECMAScript

// O JavaScript foi criado foi criado em 1995 por Brendan Eich, enquanto ele trabalhava no Netscape.
// O nome original da linguagem era Mocha, que ainda foi mudado para LiveScript, antes de a linguagem ser de fato nomeada como JavaScript.

// ECMA

// No ano de 1996, com o objetivo de padronizar a linguagem a Netspace decidiu juntar o JavaScript a ECMA International.
// A ECMA (Associação Europeia dos Fabricantes de Computadores) é uma associação que realiza a especificação e padronização de sistemas da informação.

// ECMAScript

// Com essa junção, foi criado um novo padrão de linguagem, que foi batizado com a união das palavras "ECMA" e "JavaScript", resultando no nome ECMAScript.
// Em resumo, JS é a linguagem que você escreve e executa nos navegadores, enquanto ECMAScript é a especificação que define como a linguagem JS deve se comportar.
// As versões do ECMAScript (ES6, ES7, etc) indicam as atualizações novidades a linguagem ao longo do tempo.
// Sempre que há uma nova atualização dos recursos do JavaScript, ela é lançada pelo ECMAScript, que pode ser abreviada como ES.
// É dessa especificação que veio siglas como ECMAScript 2023, ES2023 ou ES14.

//////////////////////////////////////////////////////////////////////////////////////////

// Strict Mode

// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceçoes no JS

"use strict" // Não irá permitir o uso de variáveis sem declaração, irá retornar um erro
// Da pra usar global e dentro da função
function showMessage() {

  let personName = "Jhonny" // se colocar a let não irá dar erro, pois ele vai procurar a variável no escopo global
  console.log("Olá, " + personName)
}

showMessage()

class Student {
  get point() { // get point é uma função para obter um retorno
    return 7
  }
}

let Student = new Student()
// Tenta mudar uma propriedade somente leitura
// student.point = 10

console.log(student.point)

// Tentando deletar uma propriedade de um objeto que não posso deletar
//delete window.document

// Quando passamos parametros duplicados.
/*function sum(a, a, c) {
  return a + a + c
}

const result = sum(1, 3, 2)
console.log("RESULTADO", result)
*/