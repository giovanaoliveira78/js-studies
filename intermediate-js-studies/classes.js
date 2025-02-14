// Classes

// No JS as classes são uma forma de criar objetos e definir comportamento por meio de construtores e métodos.
// Elas foram introduzidas no ECMAScript 2015 (também conhecido como ES6) para fornecer uma sintaxe mais amigável para a criação de objetos e herança de protótipos (sintax sugar)

// Construtores e métodos

// Uma classe é basicamente um modelo para criar objetos. Ela tem um construtor, que é um método especial chamado quando um objeto é instanciado a partir da classe.
// Além do construtor, você pode adicionar métodos a uma classe. Métodos são funções associadas a objetos e descrevem o comportamento desses objetos.

// Herança

// Uma classe pode herdar propriedades e métodos de outra classe, permitindo a reutilização do código.

class Person {
  constructor(name) {
    console.log("Hey,", name)
  }
}

const person = new Person("Tito")

///////////////////////////////////////////

// Criando propriedades dentro das classes
class Product {
  constructor(name) {
    this.name = name
  }
}

const product1 = new Product("Teclado")
console.log(product1.name)

const product2 = new Product("Mouse")
console.log(product2.name)

//////////////////////////////////

// Adicionando métodos nas classes

class User {
  constructor(name, email){
    this.name = name
    this.email = email
  }

  sendEmail(){
    console.log("Email enviado para", this.name, "no endereço eletrônico", this.email)
  }
}

const user = new User("Fulano", "email@email.com")
user.sendEmail()

////////////////////////////////////////////

// O que é método estático?

// Metodos estáticos são acessados sem instanciar uma classe (const blabla = new Blabla())da pra chamar direto

// Aqui não da pra usar o constructor, porque ele só funciona instanciando, como no static não precisa instanciar, ele não funciona
class Usuario {
 static showMessage(message){
    console.log(message)
  }
}

// const usuario = new Usuario()
// usuario.showMessage()

Usuario.showMessage("Essa é uma mensagem")