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

////////////////////////////////////

// Completando uma string

const creditCard = "1234567812344928"

console.log(creditCard.length)

// Pega os quatro últimos dígitos
const lastDigits = creditCard.slice(-4) // para pegar os 4 últimos digitos do cartão
console.log(lastDigits)

// Para mascarar os números

// padStart preenche a string do início
const maskedNumber = lastDigits.padStart(creditCard.length, "*") // é padStart um método de string que preenche a string a partir do início, com dois parametros, o primeiro é o tamanho dos números, o segundo é o que que quero colocar no lugar, pode ser asterisco, X etc

console.log(maskedNumber)


// O padStart preenche a string do final
const number = "123"
console.log(number.padEnd(10, "#")) // nesse caso irá exibir 123#######, porque mesmo que não tenha 10 digitos, eu coloquei que eu quero que tenha 10 então ele preencheu com # até ter 10 digitos

/////////////////

// Separando e unindo strings


// Separar a string
let text = "Estudar, Aprender, Praticar"

let separate = text.split(",") // split é um método que divide texto, por exemplo aqui coloquei a virgula, e ele sabe que em todo lugar que tiver a virgula é pra separar (nesse caso ele faz uma lista)

console.log(separate)

let message3 = "Estou aprendendo Javascript"
console.log(message3.split("a")) // aqui ele retira todas as letras A da frase
// também da pra deixar as aspas vazias, só com espaço, assim " ", que ele corta a cada espaços

// Unir a string
let joined = separate.join()
console.log(joined) // Dessa forma ele retorna igual está declarado, com as virgulas

let joined1 = separate.join(" - ")
console.log(joined1) // dessa forma ele trás do texto separado por - // ele usa um outro caracter para dividir

/// Encontrando um conteúdo no texto

let message4 = "Estou estudando os fundamentos de Javascript"

// Como obter a posição da palavra
console.log(message4.indexOf("estudando")) // indexOf procura pela palavra na frase, nesse caso aparece a partir da posição 3

// caso ele não encontre a palavra ele retorna -1
console.log(message4.indexOf("javascript"))

//// Como verificar se existe a palavra na string
console.log(message4.includes("Javascript")) // ele devolveu true, porque existe essa palavra na string
console.log(message4.includes("javascript")) // com j minusculo irá retornar false, pois não existe lá