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