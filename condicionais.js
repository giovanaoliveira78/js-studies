// Operador condicional ternário

let age = 16
console.log(age >= 18 ? "Você pode dirigir"
  : "Você não pode dirigir"
)

let idade = 16
console.log(
  age >= 18 // condição
    ? "Você pode dirigir" // se a condição for verdadeira vai exibir essa mensagem
    : "Você não pode dirigir" // se a condição for falsa vai exibir essa mensagem
)

console.log(age < 18 ? "Você não pode dirigir"
  : "Você pode dirigir"
)


// DIFERENÇA DE FALSE E TRUTHY 

/*
Falsy é quando um valor é considerado false 
Truthy é considerado verdadeiro em contextos onde um boolean é obrigatório (condicionais e loops)
*/

console.log("### EXEMPLOS DE FALSY ###")
console.log(false ? "VERDADEIRO" : "FALSO")
console.log(0 ? "VERDADEIRO" : "FALSO") // o número zero retorna falso
console.log(-0 ? "VERDADEIRO" : "FALSO") // o zero negativo (-0) retorna falso
console.log("" ? "VERDADEIRO" : "FALSO") // string vazia retorna falso
console.log(null ? "VERDADEIRO" : "FALSO") // null retorna false
console.log(undefined ? "VERDADEIRO" : "FALSO") // undefined retorna falso
console.log(NaN ? "VERDADEIRO" : "FALSO") // not a number retorna falso

console.log("### EXEMPLOS DE TRUTHY ###")
console.log(true ? "VERDADEIRO" : "FALSO") // true retorna verdadeiro
console.log({} ? "VERDADEIRO" : "FALSO") // objeto vazio retorna verdadeiro
console.log([] ? "VERDADEIRO" : "FALSO") // array vazio retorna verdadeiro
console.log(1 ? "VERDADEIRO" : "FALSO") // número inteiro retorna verdadeiro
console.log(3.23 ? "VERDADEIRO" : "FALSO") // número real ou float retorna verdadeiro
console.log("0" ? "VERDADEIRO" : "FALSO") // string com qualquer valor (números ou palavras) retorna verdadeiro
console.log(" " ? "VERDADEIRO" : "FALSO") // string vazia mas com espaço retorna verdadeiro
console.log(-1 ? "VERDADEIRO" : "FALSO") // -1 retorna verdadeiro
console.log(Infinity ? "VERDADEIRO" : "FALSO") // infinity retorna verdadeiro
console.log(f - Infinity ? "VERDADEIRO" : "FALSO") // inifinity negativo retorna verdadeiro

// CONDIÇÃO IF 

let hour = 11

if (hour <= 12) {
  console.log("Bom dia!")
}

// CONDIÇÃO IF ELSE 
let Age = 17

if (Age < 18) {
  console.log("Você não pode dirigir")
} else {
  console.log("Você pode dirigir")
}

// CONDIÇÃO ELSE IF 

let Hour = 11

if (Hour <= 12) { /// se a condição já foi atendida na primeira condição, ele não executa as demais
  console.log("Bom dia!")
} else if (Hour > 18) {
  console.log("Boa noite")
} else if (Hour > 12) {
  console.log("Boa tarde!")
}

if (Hour <= 12) {
  console.log("Bom dia!")
} else if (Hour > 12 && Hour <= 18) { // se a hora for menor que 12 E menor ou igual a 18
  console.log("Boa tarde!")
} else {
  console.log("Boa noite!")
}

// SWITCH

let option = 1

switch (option) {
  case 1:
    console.log("Consultar pedido")
    break /// interrompe o switch, pois se ele encontra o verdadeiro mas não tem o break ele vai executar tudo depois dele da mesma forma
  case 2:
    console.log("Falar com atendente")
    break
  case 3:
    console.log("Cancelar pedido")
    break
  default: // caso não exista nenhum caso anterior que se encaixou..
    console.log("Opção inválida!")
}

// TRATAMENTO DE EXCEÇÕES 

/* 
  Uma exceção é uma condição ou evento imprevisto que ocorre durante o uso da aplicação que interrompe o fluxo normal de operações.
  Essas situações inesperadas podem incluir erros, condições de falha ou eventos que a aplicação não está preparada para lidar.
  Ex: Tentativa de abrir um arquivo que não existe ou falha na conexão com um banco de dados
*/

// TRY, deu certo? -->  SIM --> Finally
// TRY, deu certo? -->  NÃO --> CATCH

// CATCH tente novamente mais tarde etc

// Quando você está usando um app e do nada ele trava e fecha, é porque não teve um tratamento de exceção

// Para usar o CATCH, se pergunte: Ao tentar executar isso, ele está dependendo de alguma coisa externa? Se sim, usar um TRY CATCH

try {
  // dentro do TRY é onde a gente TENTA executar algo
  console.log(result) // da erro por não estar declarado
} catch (error) {
  // dentro do CATCH é onde a gente captura o erro para tratar
  console.log("Não foi possível executar seu pedido. Tente novamente mais tarde!") // exibe o erro de forma amigavel 
} finally {
  // executa algo independente se deu certo ou errado
  console.log("Fim")
}

let result2 = 0

try {
  if (result2 === 0) {
    throw new error2("O valor é igual a zero")
  }
} catch (error) {
  console.log(error)
} finally {
  console.log("Fim")
}