/// Exibir o conteúdo da string em maiusculo ou minusculo

let message = "Estou estudando os fundamentos do Javascript."

console.log(message)

// Exibir em maiusculo
console.log(message.toUpperCase())

// Exibir em minusculo
console.log(message.toLowerCase())

// Como obter o comprimento de uma string
console.log(message.length)

let password = "12345"

if(password.length < 6){
  console.log("A senha deve ter ao menos 6 caracteres")
}

// Como verificar quantos dígitos tem um número

let value = 123456
console.log(typeof value) // typeof pra visualizar o tipo, nesse caso number
console.log(value.length) // Se eu usar lenght pra number vai dar undefined
console.log(String(value).length) // Então é necessário converter para uma string
console.log(value.toString().length) // Dessa forma também converte pra string