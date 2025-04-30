import { sum, multiply } from "./calc.js"
// import * as calc from "./calc.js" // também da para importar tudo de uma vez

console.log("4 + 6 =", sum(4, 6))
console.log("4 * 6 =", multiply(4, 6))

// Se eu importar tudo de uma vez, eu posso chamar assim:
// console.log("4 + 6 =", calc.sum(4, 6))
// console.log("4 * 6 =", calc.multiply(4, 6))