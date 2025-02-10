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

///////////////////////////////////////////////

let date = new Date("2025-02-10T08:02:00")

// Dia da semana contando de 0 a 6, domingo sendo 0, 1 segunda, 2 terça...
console.log(date.getDay())

// Exibe dia do mês, também conta de 0 a 30
console.log(date.getDate())

// Exibe o mês, de 0 a 11
console.log(date.getMonth())

// Se eu quiser fazer do jeito "tradicional", com os meses de 1 a 12, eu posso colocar o + 1, pra ficar "certo"
console.log(date.getMonth() + 1)

// Exibe o ano
console.log(date.getFullYear())

// Exibe a hora
console.log(date.getHours())

// Exibe os minutos
console.log(date.getMinutes())

// Exibe os segundos
console.log(date.getSeconds())

/////////////////////////////////////////////////////////////

let data = new Date("February 10, 2025 08:15:00")

// Modificar o ano
data.setFullYear(2030)

// Moficar o mês (começa com zero)
data.setMonth(6)

// Modificar o dia
data.setDate(20)

// Modificar a hora
data.setHours(18)

// Modificar os minutos
data.setMinutes(20)

// Modificar os segundos
data.setSeconds(30)

console.log(data)