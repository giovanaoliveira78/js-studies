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

/////////////////////////////////////////////////////

// Formatando data e hora

let date1 = new Date("2025-07-02T14:30:00")

// Formata para o dia sempre ter 2 dígitos
let day = date1.getDate().toString().padStart(2, "0")
console.log(day)

// Formata para o mês ter 2 dígitos
let mounth = (date1.getMonth() + 1).toString().padStart(2, "0")
console.log(mounth)

let year = date1.getFullYear()
let hour = date1.getHours()
let minutes = date1.getMinutes()

console.log(`${day}/${mounth}/${year} às ${hour}:${minutes}`)

/////////////////////////////////////////////////////

// Convertendo uma data para string 

let data1 = new Date("2025-07-02T15:30:00")

// Converte para string
console.log(data1.toString())

// Exibe só a data
console.log(data1.toDateString())

// Exibe somente a hora
console.log(data1.toTimeString())

///////////////////////////////////////////////////////

// Exibe data e hora de acordo com a localidade

let date2 = new Date("2025-07-02T15:23:00")

// Exibe a data e hora no formato local
console.log(date2.toLocaleDateString())
console.log(date2.toLocaleTimeString())

// Exibe a data e hora no formato escolhido
console.log(date2.toLocaleString("en")) // mostra data e hora
console.log(date2.toLocaleDateString("en")) // mostra só a data
console.log(date2.toLocaleTimeString("en")) // mostra só a hora

// Da pra definir um padrão usando o toLocaleString
console.log(date.toLocaleString("en"))

// EXibe a data em style diferente
console.log(date.toLocaleString("pt-BR", {
  dateStyle: "short"
})
)

//
console.log(date.toLocaleString("pt-BR", {
  dateStyle: "long" // Exibe 10 de fevereiro de 2025, dessa forma
})
)

console.log(date.toLocaleString("pt-BR", {
  dateStyle: "medium" // Exibe 10 de fev. de 2025, dessa forma
})
)

console.log(date.toLocaleString("pt-BR", {
  dateStyle: "full" // Exibe segunda-feira, 10 de fevereiro de 2025, dessa forma
})
)

console.log(date.toLocaleString("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  hour: "2-digit",
  minute: "2-digit"
}))

let amount = 12.5

// Usando toLocaleString para formatar exibição de valores
console.log(amount.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
}))

////////////////////////////////////////////////////////////

// Aprendendo sobre fuso horário  

// Timestamp

// Uma data é representada como um número. Esse número também é conhecido como timestamp (carimbo de data/hora)

// O timestamp é um valor que representa um ponto específico no tempo, geralmente expresso como uma contagem de segundos ou milisegundos desde um momento de referência

// Refêrencia: a data do javascript é baseada no valor de tempo em milisegundos desde meia noite de 01 de Janeiro de 1970, UTC.

// Fuso horário

// Sempre há duas maneiras de interpretar data e hora: local ou como Tempo Universal Coordenado (UTC)

// O fuso horário local não é armazenado no objeto de data, mas é determinado pelo ambiente que está exeutando (dispositivo do usuário)

// Intl é a API de Internacionalização do ECMAScript

// Obtém informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()

console.log(currentLocale)

// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

const dataa = new Date()

// Obtém a diferença em minutos do timezone
console.log(dataa.getTimezoneOffset())

// Obtém a diferença em horas do timezone
console.log(dataa.getTimezoneOffset() /60)