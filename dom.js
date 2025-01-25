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

// GUEST É O NOME DO ID DE UM ELEMENTO UTILIZADO PELO PROFESSOR

const guest1 = document.querySelector("#guest-1") /// usa se # para pegar pelo ID
console.log(guest)

const guest2 = document.querySelector(".guest") /// USe se o . para selecionar pela classe, aqui por padrão sempre retorna o primeiro elemento encontrado

const guest3 = document.querySelectorAll(".guest") // usa se o all pra pegar tudo que tem dentro da classe

/////////////////////////

const guestt = document.querySelector("#guest-1")

// Retorna o conteúdo de texto visível e oculto
console.log(guest.textContent)

// Também da para atribuir um novo conteúdo
guest.textContent = "Beltrano da Silva"

// As ações acima mudam tudo da li, para mudar apenas, por exemplo o SPAN deveria ser:

const guest = document.querySelector("#guest-1 span")

console.log(guest.innerText) // retorna o texto sem formatação, retorna somente o contéudo visível

console.log(guest.innerHTML) // retorna o HTML como texto