import { sum, multiply } from "./calc.js"
// import * as calc from "./calc.js" // também da para importar tudo de uma vez


// Se a função tiver como defalut, eu posso chamar assim:  
import sum from "./calc.js" // não precisa das chaves, e com as chaves da erro
// Caso eu queira importar uma função que esta como default, e outra que não está
import sum, { multiply } from "./calc.js"


console.log("4 + 6 =", sum(4, 6))
console.log("4 * 6 =", multiply(4, 6))

// Se eu importar tudo de uma vez, eu posso chamar assim:
// console.log("4 + 6 =", calc.sum(4, 6))
// console.log("4 * 6 =", calc.multiply(4, 6))

// Para renomear a função tem que importar ela toda no final do arquivo que a função está

//Também tem como renomear dirto no import
//import { sum as s, multiply as m} from "./calc.js" // dessa forma


// Foi criado a classe Calc no arquivo calc.js
// Para importar a classe, eu posso fazer assim:
import Calc from "./calc.js"
const calc = new Calc()

console.log("4 + 6 =", calc.sum(4, 6))
console.log("4 * 6 =", calc.multiply(4, 6))
console.log(calc.name)


// setTimeout() executa uma função após um intervalo de tempo especificado
setTimeout(() => {
  console.log("Olá! Tudo bem?")
}, 2000) // Conta o tempo em milisegundos

// setInterval() executa uma função após um intervalo de tempo especificado

let value = 10
const interval = setInterval(() => {
  console.log(value)
  value--

  if (value === 0) {
    console.log("FELIZ ANO NOVO!!!!!")

    // Interrompe o intervalo de execuções
    clearInterval(interval)
  }
}, 1000) // irá executar a função a cada 1 segundos