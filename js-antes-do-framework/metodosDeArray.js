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
const result = words.filter((word) => word.length > 3)
console.log(result)

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