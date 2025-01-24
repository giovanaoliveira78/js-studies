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

///////////////////////////////////////////////////////////////////////

// Query selector

const guest1 = document.querySelector("#guest-1") /// usa se # para pegar pelo ID
console.log(guest)

const guest2 = document.querySelector(".guest") /// USe se o . para selecionar pela classe, aqui por padrão sempre retorna o primeiro elemento encontrado

const guest3 = document.querySelectorAll(".guest") // usa se o all pra pegar tudo que tem dentro da classe