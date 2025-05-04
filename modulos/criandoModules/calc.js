// é comum começar nome de classes com letra maíscula 
export class Calc {
  name = "Elena"

  sum(a, b) {
    return a + b
  }

  multiply(a, b) {
    return a * b
  }

}

export function sum(a, b) {
  return a + b
}
// named export - cada método é importado pelo seu próprio nome
export function multiply(a, b) {
  return a * b
}

// Usando o default, dessa forma não precisa importar com a chave no outro arquivo{}
// default export - é a função padrão fornecida pelo módulo
// export default function sum(a, b) {
//   return a + b
// }

//Quando a função é default, pode chamar ela de qualquer nome, pois já entende que ela é padrão

// Também da para exportar tudo de uma vez
// export { sum, multiply }

// Para exportar a função com outro nome
// export { sum as sumNumbers, multiply } // lá no import vai aparecer o nome renomeado