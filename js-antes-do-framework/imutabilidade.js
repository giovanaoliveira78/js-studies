/// Imutabilidade

// Uma vez que algo imutável é criado, você não pode modificar seus valores ou propriedades. Em vez disso, você cria uma cópia modificada para manter o original inalterado.

// referencia em vez de criar um objeto novo, ele cria uma referencia para o mesmo objeto

// NA CRIAÇÃO DA INFERFACE 
// A imutabilidade é utilizada para otimizar a atualização do DOM (Document Object Model) e para fornecer um modelo mais previsível no desenvolvimento de interfaces (UI)

// Detectar Mudanças 

// Detectar mudanças e objetos mutados é difícil, como eles são modificados diretamente a detecção de que mudou exatamente, requer um objeto mutado para ser comparado com
// as cópias das suas próprias versões anteriores e a árvore inteira do objeto para ser cruzada.

// Detectar mudanças em objetos imutáveis é consideravelmente fácil. Se ele for diferente do anterior, concluímos que o objeto foi alterado.

// Benefício
// Como os dados imutáveis podem determinar facilmente se ocorreram alterações, isso também ajuda a determinar quando um componente deve ser renderizado novamente.

// Aplicando imutabilidade 

const address1 = {
  street: "Av. Brasil",
  number: 20
}

// Isso não é uma cópia, é uma referência
//const address2 = address1
//address2.number = 30

// Aqui estamos criando um novo objeto utilizando as propriedades e valores de address1
// Opção 1:
//const address2 = { ...address1 }
//address2.number = 30


const address2 = { ...address1, number: 30 }
console.log(address1, address2)


const list1 = ["Apple", "Banana"]

// Exemplo de referencia de array
// const list2 = list1
//list2.push("Watermelon") (PUSH é para adicionar)

const list2 = [...list1, "Watermelon"]

console.log(list1, list2)

/////////////////////////////////////////////////////////////////////////////////////////

// Shallow e deep copy

const htmlCourse = {
  course: "HTML",
  students: [{ name: "Damon", email: "email@email" }],
}

// const jsCourse = {
//   ...htmlCourse,
//   course: "JavaScript",
//   students: [...htmlCourse.students]
// }

// Vai modificar o htmlCourse porque students é uma referência e não uma cópia
//jsCourse.students.push({ name: "John", email: "email@email" })

// Deep Copy (cópia profunda)
const jsCourse = {
  ...htmlCourse,
  course: "JavaScript",
  students: [...htmlCourse.students, { name: "Elena Gilbert", email: "elena@email.com" }]
}

// Dessa forma também adiciona um novo aluno
jsCourse.students.push({ name: "Stefan", email: "stefan@email" })

console.log("HMTL", htmlCourse)
console.log("JS", jsCourse)

//////////////////////////////////////////////////////////////////////////////////////////////////

// SHALLOW E FREEZING

const book = {
  title: "Objetos Imutáveis",
  category: "Javascript",
  author: {
    name: "Stefan",
    email: "stefan@email.com"
  }
}
// O JS em si não impõe restrições a modificações dos objetos
//book.category = "HTML"

// Congela o objeto e impede a modificação
Object.freeze(book)
book.category = "HTML" // após aplicar o freeze ele não modifica 

// O Object.freeze () não impede modificações profundas em objetos aninhados (shallow freezing)
book.author.name = "Elena Gilbert"
console.log(book)