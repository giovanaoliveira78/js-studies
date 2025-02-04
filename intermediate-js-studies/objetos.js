// Objetos

// Um objeto é uma estrutura que representa algo com propriedades e comportamentos

// Propriedades

// Imagine que você tem um carro
// O carr é um objeto
// Ele tem várias caracteristicas (PROPRIEDADES)

// Então podemos criar um objeto CARRO, e dentro do objeto CARRO podemos definir as caracteristicas dele 
// Caracteristicas do carro: modelo, número de portas, ano de fabricação, cores diferentes

// Definimos dentro do objeto propriedades para representá-lo

// Métodos

// método é o comportamento
// Além de características (propriedades), o carro pode fazer coisas (comportamentos)
// Um carro pode ligar/desligar, acelerar/frear etc
// Tudo que um objeto executa é chamado de comportamento
// no Javascript as propriedades podem ser valores, como texto ou números, e os métodos são funções associadas a esse objeto

// Cria um objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

// Cria um objeto com propriedades e métodos
const user = {
  email: "email@email.com", // email: é a propriedade e "" o valor
  age: 18,
  name: { // estrutura de objeto aninhado (um dentro do outro)
    first_name: "Sam", // para objetos é comum usar o padrão de separar por _, já para variáveis é mais comum usarAssim
    surname: "Winchester",
  },
  address: {
    street: "X",
    number: 1,
    city: "Kansas",
    postal_code: "12345-123"
  },
  message: () => {
    console.log("Hey, Sam")
  }
}

// Acessando propriedades e métodos usando a notação de ponto
console.log(user.email)

// Acessando propriedades de objetos
console.log(user.name.first_name)

// Executa o método do objeto
user.message()

// Notação de colchetes []
console.log(user["email"]) // é a mesma coisa que usando o . para ir acessando as propriedades do objeto mas com colchetes
console.log(user["name"]["first_name"])
user["message"]()

const usuario = {
  name: "Dean",
  email: "teste@email.com",
  message: function () {
    console.log(`Hey, ${this.name}`) // se usar a aron function o THIS não funciona, tem que ser a função anonima
  }
}

usuario.message()

///////////////////////////////

const product = {
  name: "Teclado",
  quantity: 100,
}

console.log(product.name)

// Atualiza o valor de uma propriedade
console.log(product.quantity) // se eu dar um console.log antes de atualizar, ele vai pegar o valor anterior
product.quantity = 90
console.log(product.quantity) // colocando o console.log depois, ele já pega o valor atualizado

console.log(product.name)
product.name = "Mouse"
console.log(product.name)

// Notação de colchetes para atualizar o conteúdo
product["quantity"] = 50
console.log(product)

///////////////////////////////////////////

// Encadeamento opcional / Optional chaining

// Se a propriedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar um erro

// Útil ao explorar o conteúdonde um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias.

const user1 = {
  id: 1,
  name: "Elena",
  // address: {
  //   street: "N",
  //   city: "Mystic Falls",
  //   geo: {
  //     latitude: 47.8080,
  //     longitude: 17.5674
  //   },
  // },
  // message: function(){
  //   console.log(`Hey, ${this.name}`)
  // }
}

console.log(user1?.address?.city) // o adress está comentado, colocando as interrogações eu quero dizer que não sei se terá algum valor ali, pois é opcional, dessa forma não aponta erro, mas aponta UNDEFINED

user.message?.() // nesse caso também, não sei se esse método está disponível, se tiver, executa. Se não, da undefined


//////////////////////

/*
OPERADOR DE COALESCÊNCIA NULA (??)
Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo
*/

let content = null
console.log(content ?? "Conteúdo padrão") // se content estiver null, ele exibe o conteúdo que está após a ?? (lado direito)

let test = "Hey"
console.log(test ?? "Hi") // Nesse caso o test não está null, então vai exibir o conteúdo de test (lado esquerdo)

// ele leva em consideração somente o nulo ou undefined

const user2 = {
  name: "Katherine",
  picture: undefined
}

console.log(user2.picture ?? "default.png") // nesse caso, a imagem é undefined, então exibe o defalut.png

//////////////////////////////

// Funções construtoras 

function createProduct(name) {
  const product = {}

  product.name = name
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`)
  }

  return product
}

// O new cria um novo objeto utilizando a estrutura do construtor ou da função constratutora

const product1 = new createProduct("teclado")
console.log(product1.name)
product1.details()

const product2 = new createProduct("mouse")
console.log(product2.name)
product2.details()

console.log(product1 === product2) // se eu colocar pra verificar se o product 1 é estritamente igual ao product2 ele vai dar false, porque são objetos diferentes

// Exemplos de funções construtoras disponíveis no próprio Javascript

let myName = new String("Stefan")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2025-1-1")
console.log(date)

function person(name){
  this.name = name
  this.message = function(){
    console.log(`Hey, ${this.name}`)
  }
}

const person1 = new person("Damon")
console.log(person1.name)
person1.message()

const person2 = new person("Caroline")
console.log(person2.name)
person2.message()