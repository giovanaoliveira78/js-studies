// Repetições

// Executa um bloco de código várias vezes de acordo com uma condição específica

// Lop while

// WHILE: executa até que a condição seja verdadeira

let execute = true

while (execute) {
  let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")

  console.log(response)
  if (response === "2") {
    execute = false
  }
}

console.log("Segue o fluxo...")

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