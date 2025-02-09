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

let value = true

// while(value === true){
//   console.log("Executando while...")
// }