// Document object Model - DOM

/*
  É a representação de dados dos objetos que compõem a estrutura e o conteúdo de um documento na web, (uma página HTML é um documento.)
  Representa o documento com nós e objetos (estrutura de árvore) que pode ser acessado e modificado.
*/

// Visualizar o conteúdo do document, ela já está disponível pelo próprio JS é só chamar

console.log(document)

// acessando elementos na DOM

// Obter o title da página
console.log(document.title)

// Acessar o elemento pelo ID

const guest = document.getElementById("guest-2")
console.log(guest)

// Mostra as propriedades do objeto
console.dir(guest)

// Acessar elemento com class (SELETOR class)
const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass)

console.log(guestByClass.item(0)) // aqui pega o elemento da primeira posição
console.log(guestByClass.item[1])// assim também pega pela posição

// Selecionar lista elementos pela tag
const guestTag = document.getElementsByTagName("li")
console.log(guestTag)