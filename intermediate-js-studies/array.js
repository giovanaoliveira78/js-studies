// Array é uma coleção ordenada de valores
// Podemos comparar um array a uma lista, onde cada item da lista possui uma posição específica conhecida como índice.

// Criar Array com construtor

const newArray = new Array()
console.log(newArray)

// Retorna o tamanho do array
console.log("Stefan".length)

// [] - Array
// {} Objeto

// Criar o array com 10 posições VAZIAS.
const available = new Array(10)
console.log(available)
console.log(available.length)

// Criando e acessando um array

// Cria nosso array
let fruits = ['Apple', 'banana', 'orange']
console.log(fruits)

// verifica o tamanho
console.log(fruits.length)

// Acessa o item pelo índice
console.log(fruits[1])

// Exibe o último elemento da lista dinamicamente
console.log(fruits[fruits.length -1 ]) // minha lista tem o tamanho 3, mas como são indices, é 0, 1, 2. E dessa forma vai ser undefined, então SEMPRE é o tamanho da lista -1
// sempre é o tamanho da lista -1

///////////////////////////////

// Convertendo uma string em array

let fullName = "Elena Gilbert"
console.log(fullName)

// Cria um array com os nomes separando pelo espaço
console.log(fullName.split(" ")) // está vazio as aspas (mas com espaço) porque quero que quebre a linha onde tem espaço

// Cria um array com as letras, cada posição é uma letra, inclusive os espaços
console.log(Array.from(fullName)) // ele cria um array a partir da strinf fullName

///////////////////////

// Adicionando e removendo um item do array

let users = []

// Adiciona um item no final do array
users.push("Sam") // o método push adiciona algo no final do array
users.push("Dean")
users.push("Mary")

// Adiciona um item no início do array
users.unshift("John")

// Remove um item do início do array
users.shift()

// Remove um item do final do array
users.pop()

console.log(users)

///////////////////////////////////////////////

// Usando o indice

let fruit = ["Apple", "Watermelon", "Lemon", "Strawberry"]

// Encontra e retorna o indice do elemento no array
let position = fruit.indexOf("Watermelon")
console.log(position)

// se eu colocar um item que não tem no array ele retorna -1

// fruit.splice(1, 3) // ele remove do indice 1 ao 3, primeiro parametro é onde ele deve começar a remover e o segundo é quantos itens da lista tem que remover após o start que você sinalizou, ou seja, a partir do indice 1, remova 3 itens
console.log(fruit) // retornando somente apple


fruit.splice(position, 1) // dessa forma eu digo qual eu quero excluir especificamente, então coloco que eu quero remover o item do indice 1, e sai o watermelon
console.log(fruit)

//////////////////////////////////////////////

// Quais elementos array aceita?

let myArray = [
  "Um texto",
  10,
  true,
  function(){
    console.log("Função dentro do array")
  },
  {
    name: "Luan",
    email: "email"
  }
]

console.log(myArray[0]) // exibe a string (um texto)
console.log(myArray[1]) // exibe o número (10)
console.log(myArray[2]) // exibe o boolean (false)
myArray[3]() // exibe a função
console.log(myArray[4]) // exibe o objeto
console.log(myArray[4].name) // exibe a propriedade name do objeto
console.log(myArray[4].email) // exibe a propriedade email do objeto