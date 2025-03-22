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

// "use strict" // Não irá permitir o uso de variáveis sem declaração, irá retornar um erro
// Da pra usar global e dentro da função
//function showMessage() {

//let personName = "Jhonny" // se colocar a let não irá dar erro, pois ele vai procurar a variável no escopo global
//console.log("Olá, " + personName)
//}

//showMessage()

//class Student {
// get point() { // get point é uma função para obter um retorno
// return 7
//}
//}

//let Student = new Student()
// Tenta mudar uma propriedade somente leitura
// student.point = 10

//console.log(Student.point)

// Tentando deletar uma propriedade de um objeto que não posso deletar
//delete window.document

// Quando passamos parametros duplicados.
/*function sum(a, a, c) {
  return a + a + c
}

const result = sum(1, 3, 2)
console.log("RESULTADO", result)
*/

//////////////////////////////////////////////////

// Desestruturação de array 

// destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Elena Gilbert", "elena@email.com"]

// Desestruturando array

const [username, email] = data // pego o contéudo de data e na primeira posição pego o conteúdo dela e coloco dentro da primeira variavel criada aqui
console.log("Nome:", username)
console.log("Email:", email)

const fruits = ["Banana", "Apple", "Orange"]

// Desestruturar somente o primeiro

const [banana] = fruits
console.log(banana)

// Ignorando o primeiro na desestruturação
const [_, Apple] = fruits // quando coloco o _ ele ignora o primeiro item
console.log(Apple)

// Ignorando o primeiro e o segundo na desestruturação
const [, , Orange] = fruits
console.log(Orange)

///////////////////////////////////////////////////////////////////////////

// Desestruturação de objetos

const product = {
  description: "teclado",
  price: 150
}

const { description, price } = product // pego o contéudo de product e na primeira posição pego o contéudo dele e coloco dentro da primeira variavel criada aqui
console.log("Descrição:", description)
console.log("Preço:", price)

function newProduct({ description, price }) {
  console.log("### Novo produto ###")
  console.log("Descrição:", description)
  console.log("Preço:", price)
}

newProduct({
  description: "Mouse",
  price: 70
})

//////////////////////////////////////////////////////////

// Conhecendo rest params
// Rest params (...) permite representar um número indefinido de argumentos como um array

function values(a, ...rest) { // usa o ... rest para deixar a quantidadede de parametros dinamico
  // Mostra a quantidade de parametros
  console.log(rest.length)

  // Exibindo o contéudo do array
  console.log(...rest) // também da pra chamar de args 

  // Exibe o conteúdo do rest que é um array
  console.log(rest)
}

values(2, 3, 4)