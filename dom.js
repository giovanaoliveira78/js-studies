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

//////////////////////////////////////

// Alterando estilos

const input = document.querySelector("#name")

// Adiciona a classe
input.classList.add("input-error")

// Remove a classe
input.classList.remove("input-error") /// ou

// Se não tiver a classe adiciona. Se tem, remove
input.classList.toggle("input-error")

const button = document.querySelector("button")

// Modificar as propriedades CSS do elemento
button.style.backgroundColor = "red" // dessa forma ele muda a cor do botão


/////////////////////////////////////////////////////////////////////

// Criando elementos

const guests = document.querySelector("ul")

const newGuest = document.createElement("li") // permite que possa criar novos elementos
newGuest.classList.add("guest")
const guestName = document.createElement("span")

guestName.textContent = "Beltrano"

const newName = document.createElement("span")
newName.textContent = "da Silva"

// Adiciona após o último filho (ou seja, ele fica por último)
newGuest.append(guestName)

// Adiciona antes do primeiro filho (ou seja, ele fica por primeiro)
newGuest.prepend(guestName)

// É mais simples que o append e aceita apenas um argumento
newGuest.appendChild(guestName)
console.log(newGuest)

//////////////////////////////////////////////////////////////////////////////

// Manipulando atributos

const input1 = document.querySelector("input")

input.setAttribute("desabled", true) // se eu quiser desabilitar o input

input.setAttribute("type", "file") // se eu quiser colocar o input em formato de arquivo

input.removeAttribute("id") // se eu quiser remover o atributo ID

//////////////////////////////////////////

// Eventos 

// Quando o usuário interage com a aplicação, isso é um evento

window.addEventListener("load", () =>{
  console.log("A página foi carregada!")
}) // é um método que observa tudo que acontece com uma janela, neste exemplo observar o load


// quando um botão tem o type submit, após clicar ele automaticamente regarrega a página
addEventListener("click", (event) => {
  event.preventDefault() /// com isso ele não regarrega a página mais 
  console.log(event)

  // retorna o elemento clicado
  console.log(event.target)

  // Retorna o textContent do elemento clicado
  console.log(event.target.textContent)
})