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

  return {
    id: Math.random(),
    description: product,
    price: 150
  }
})

console.log(formatted)