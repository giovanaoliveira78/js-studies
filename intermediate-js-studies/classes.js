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
  constructor(name, email) {
    this.name = name
    this.email = email
  }

  sendEmail() {
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
  static showMessage(message) {
    console.log(message)
  }
}

// const usuario = new Usuario()
// usuario.showMessage()

Usuario.showMessage("Essa é uma mensagem")

////////////////////////////////////////////////

// Como aplicar herança com classes?

class Animal {
  constructor(name) {
    this.name = name
  }
  makeNoise() {
    console.log("Algum som genérico do animal")
  }
}

// A palavra reservada extends significa herdar, nesse caso a classe dog irá herda tudo da classe Animal

// Usando para sobrescrever o método
class Dog extends Animal {
  makeNoise() {
    console.log("Au au") // para sobrescrever eu escrevo igualzinho onde criei (nesse caso foi criado dentro de Animal)
  }                      // Quando escrevo igual, ele sobrescreve o que já existe
}

class Cat extends Animal {
  makeNoise() {
    console.log("Miau")
  }

  run() {
    console.log("Correndo...")
  }
}

const dog = new Dog("Bob")
console.log(dog.name)
dog.makeNoise()

const cat = new Cat("Tito")
console.log(cat.name)
cat.makeNoise()

cat.run()

////////////////////////////////////////////////////////////

// Aprendendo sobre herança e cadeia de protótipos

// Difereça de classes x prototype
// JS é dinâmico e não dispõe de uma implementação de uma class (a palavra chave class foi introduzida no ES2015, mas é syntax sugar, o JS permanece baseado em prototype)

// Protoype
// Quando se trata de heranças, o JS tem somente um construtor: objetos.
// Cada objeto tem um link interno para um outro objeto chamado prototype.
// O objeto prototype também tem um atributo porototyoe, e assim por diante até que o valor null seja encontrado como sendo o seu prototype.
// O null que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos (prototype chain).

// Resumo
// Quando um objeto é criado ele possui automaticamente uma propriedade que referência outro objeto e esse objeto é chamado de prototype
// O Objeto prototype herda propriedades e métodos do seu protótipo ascendente. Essas propriedades não pertencem ao objeto em si, mas sim ao prototype do objeto
// O prototype é o mecanismo pelo qual os objetos JS herdam recursos uns dos outros
// A cadeia termina quando chegamos a um protótipo que tem null por protótipo
// Um objeto pode utilizar qualquer propriedade ou método que existir nesse encadeamento de protótipos

// Criando um objeto prototype

const address = {
  city: "Sao Paulo",
  country: "Brazil",
}

console.log(address)

const users = ["Jade", "Elena", "Isis"]

console.log(users)

const nome = "Tito Lino"
console.log(nome.__proto__) // se colocar o __proto__ ele mostra o prototype do objeto