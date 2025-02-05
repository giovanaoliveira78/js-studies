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

/// Como substituir parte de um texto
let message1 = "Hey, girl"

console.log(message1.replace("Hey", "Hi")) // O método replace contém dois parametros que são duas strings
// o primeiro parametro é o que eu quero substituir 
// o segundo é pelo que eu quero substituir


// Também da pra trocar frases

let message2 = "Hey, I'm a software quality analyst"
console.log(message2) // mensagem original
console.log(message2.replace("software quality analyst", "Quality Assurance Engineer")) // Mensagem alterada

// Como extrair uma parte da string (start, end) sinalizando onde começa e onde termina

console.log(message2.slice(0,3)) // dessa forma ele pega da posição zero, até a posição 3, e irá retornar o "Hey"
console.log(message2.slice(11,19)) // pega da posição 11 até a 19 e exibe "software"

// Como extrair uma parte da string de trás pra frente
console.log(message2.slice(-7)) // nesse caso eu conto quantos caracteres eu tenho na última palavra e uso o negativo (-7)
// usando o negativo ele pega de trás pra frente, ou seja começando pela última palavra


// Método para remover espaços em braco no início ou final da string
let textWithSpace = "     Texto de exemplo    "

console.log(textWithSpace.length) // aqui eu verifico o tamanho da string
console.log(textWithSpace.trim()) // trim remove espaços em branco no início e no final da string, retornou sem os espaços
console.log(textWithSpace.trim().length) // aqui eu consigo verificar o tamanho que tem agora depois de remover os espaços

// o método TRIM não vai remover os espaços do meio do texto, pois ele entende que faz parte da string, irá remover só o espaço do começo e fim