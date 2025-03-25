// Método MAP

// O método map() chama a função de callback recebida por parâmetro para cada elemento do array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor"]

// Percorrendo os itens do array
products.map((product) => {
  console.log(product) // Usa esse tipo usando a chave quando quero fazer alguma lógica
})

// Sintaxe reduzida
products.map(product => console.log(product)) // se for só pra retornar, da pra usar a reduzida

// Utilizando o novo objeto retornado
const formatted = products.map((product) => {
  //return product.toUpperCase()

  /* return {
     id: Math.random(),
     description: product,
     price: 150
   }*/
})

console.log(formatted)

/////////////////////////////////////////////////////

// Método FILTER

// O método filter() cria um novo array com todos os elementos que passaram na condição

const words = ["Javascript", "HTML", "CSS", "WEB"]

// Filtrando palavras que tenham mais do que 3 letras
//const result = words.filter((word) => word.length > 3)
//console.log(result)

const produtos = [
  { description: "Teclado", price: 150, promotion: true },
  { description: "Mouse", price: 70, promotion: false },
  { description: "Monitor", price: 900, promotion: true },
]

// Exemplo de um filtro de produtos na promoção
const promotion = produtos.filter((product) => product.promotion == true)
console.log(promotion)

/////////////////////////////////////////////////////

// Metodo findIndex()

// retorna o indice no array do primeiro elemento que satisfaz a condição. Caso contrario, retorna -1, indicando que nenhum elemento passou no teste

const values = [4, 6, 8, 12]

// Obtendo o primeiro indice do elemento que o valor é maior do que quatro
const index = values.findIndex((value) => value > 4)

console.log(index)
console.log(values[index])

// Exemplo de quando não encontrou 
console.log(values.findIndex((value) => value > 12))

//////////////////////////////////////////////////////

// Método find

// Retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, undefined é retornado

const values1 = [5, 12, 8, 130, 44]

// Retorna o primeiro elemento que o valor é maior do que 10
const found = values1.find((value) => value > 10)
console.log(found)

// Exemplo com objetos

const fruits = [
  { name: "apple", quantity: 23 },
  { name: "banana", quantity: 25 },
  { name: "orange", quantity: 52 }
]

const result = fruits.find((fruit) => fruit.name === "banana")
console.log(result)

///////////////////////////////////////////////////////

// Metodo every()
// Testa se todos os elementos do array passam na condição e retorna um valor Boolean

// Exemplo de array de idades.

const ages = [15, 30, 39, 29]

// Verificando se todas as idades são maiores ou iguais do que 18
const resultAge = ages.every((age) => age >= 18)
console.log(resultAge) // irá retornar false porque tem o 15, que não é maior ou igual a 18
// só vai retornar verdadeiro se todos os itens atendem a condição, se um não atender já retorna falso

//////////////////////////////////////////////////////

// Metodo some()
// Testa se ao menos um dos elementos do array passa na condição e retorna um valor true ou false

// Exemplo de array de idades

const ages1 = [15, 30, 39, 29]

const resultAge1 = ages1.some((age) => age > 18)
console.log(resultAge1) // retorna true pois possui o 15 que é menor do que 18
// Um sendo verdadeiro já retorna true


////////////////////////////////////////////////////////////

///Método Reduce()

// é utilizado para reduzir um array a um único valor

/*
Parâmetros:
- Array original (values)
- Acumulador (accumulator)
- Valor da iteração (currentValue)
- Valor inicial (0)
- Index (index da iteração atual - opcional)
*/

const values2 = [1, 2, 3, 4, 5]

const sum = values2.reduce((accumulator, currentValue, index) => {
  /*console.log("ACUMULADOR", accumulator)
  console.log("CURRENT VALUE", currentValue)
  console.log("INDEX", index)


  console.log("SOMA", accumulator + currentValue)
  console.log("#########################")
  */
  return accumulator + currentValue
}, 0)

console.log("RESULTADO DA SOMA FINAL:", sum)