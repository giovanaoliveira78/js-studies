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