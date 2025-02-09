// Repetições

// Executa um bloco de código várias vezes de acordo com uma condição específica

// Lop while

// WHILE: executa até que a condição seja verdadeira

// let execute = true

// while (execute) {
//   let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")

//   console.log(response)
//   if (response === "2") {
//     execute = false
//   }
// }

// console.log("Segue o fluxo...")

////////////////////////////////////////////

// Loop infinito

// let value = true

// while(value === true){
//   console.log("Executando while...")
// }

////////////////////////////////////////////////////////

// DO WHILE: repete até que a condição especificada seja VERDADEIRA. No entanto, a instrução será executada pelo menos uma vez antes da condição ser verificada

let value = 11

do {
  value++
  console.log(value)
} while (value < 10)

console.log("Segue fluxo...")

//////////////////////////////////////////////////////////////

// Loop for

// FOR repete até que a condição seja falsa

// - variável de controle
// - condição
// - incremento ou decremento da variável de controle

// for (step = 0; step < 10; step++) {
//   console.log(step)
// }

/* Exemplo de uma tabuada
console.log(" ### TABUADA ###")
console.log(`7x0 = ${7*0}`)
console.log(`7x0 = ${7*1}`)
console.log(`7x0 = ${7*2}`)
console.log(`7x0 = ${7*3}`)
console.log(`7x0 = ${7*4}`)
console.log(`7x0 = ${7*5}`)
console.log(`7x0 = ${7*6}`)
console.log(`7x0 = ${7*7}`)
console.log(`7x0 = ${7*8}`)
console.log(`7x0 = ${7*9}`)
console.log(`7x0 = ${7*10}`)
*/

let number = 7

// ++ é incremento, ou seja, soma mais um
// -- é decremento, ou seja, subtrai um

for (step = 0; step <= 10; step++) {
  console.log(`${number}x${step} = ${number * step}`)
}

/////////////////////////////////////////////////

// FOR in executa iterações a partir de um objeto e percorre as propriedades

let person = {
  name: "Anne",
  surname: "Shirley",
  email: "email@email.com"
}


for (let property in person) { //esse let é uma varável axiliar, em cada iteração ele guarda a resposta em property
  // Dessa forma exibe o nome da propriedade
  console.log(property)

  // Exibe o conteúdo da propriedade
  console.log(person[property])
}

let students = ["Sam", "Dean", "Castiel"]

for (let index in students) {
  console.log(students[index])
}

////////////////////////////////////////////////////////

// FOR of itera sobre os valores de um objeto iterável

let estudantes = ["Elena", "Caroline", "Bonnie"]

for (let student of estudantes) {
  console.log(student)
}

// o for of só funciona com coisas iteraveis, ou seja, array, com objetos da erro

let user = [{
  name: "Caroline",
  email: "email@email.com" /// uma solução é colocar o objeto dentro de um array
}
]

for (let value of user) {
  console.log(value.name)
}

//////////////////////////////////////////////////////////

// break encerra a execução da repetição ou switch para seguir para a instrução seguinte

let options = 4

switch (options) {
  case 1:
    console.log("Cadastrar")
    break
  case 2:
    console.log("Atualizar")
    break
  case 3:
    console.log("Remover")
    break
  default:
    console.log("Opção inválida")
    break
}

// Utilizando o break para finalizar a repetição

for (let i = 0; i < 10; i++) {
  if(i === 5){
    break
  }
  console.log(i)
}