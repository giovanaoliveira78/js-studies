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

// Exibe o último elemento da lista
console.log(fruits[fruits.length -1 ]) // minha lista tem o tamanho 3, mas como são indices, é 0, 1, 2. E dessa forma vai ser undefined, então SEMPRE é o tamanho da lista -1
// sempre é o tamanho da lista -1