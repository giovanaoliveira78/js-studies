// Exibe a data e hora atual
console.log(new Date())

// Exibe a data e hora de referência (considera o fuso)
console.log(new Date(0))

// Exibe o número de milissegundos
console.log(new Date().getTime())

// Define uma data com ano, mês e dia
console.log(new Date(2025, 6, 3)) // Os meses sempre começam do zero, 0, 1, 2...

// Define data, hor (ano, mês e dia), hora, minuto e segundo
console.log(new Date(2025, 1, 10, 7, 52, 0))

// Define data e hora com string
console.log(new Date("2025-02-10T07:57:00")) // quando passa em string o mês segue a sequência normal de 1, 2 ,3.....

console.log(new Date("February 10 2025 07:58:00"))