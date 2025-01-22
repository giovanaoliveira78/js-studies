// São blocos de código que a gente cria pra realizar uma tarefa especifica
// A gente cria uma função uma vez e pode chamar ela quantas vezes precisar
// Funções ajudam a deixar o código mais organizado 
// Torna o código mais reutilizável

//Para criar uma função chamamos a palavra reservada function e na frente o nome da função

function message(){
  console.log("Olá! É bom ter você aqui")
} /// só dessa forma a função não é executada

message() // é necessário chamar a função para que ela seja executada
message() // se eu chamar de novo, ela vai executar DE NOVO, e posso chamar quantas vezes eu quiser

/* 
 - Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função.
 - Argumentos: é o valor que é passado para a função
*/

function mensagem(username){ // essa função recebe o parametro username
  console.log("Olá", username) // eu uso o conteúdo de username aqui, que é o argumento
} // username só existe nesse escopo, fora daqui da 

mensagem("Fulano") // irá exibir Olá, Fulano

function sum(a, b){
  console.log(a + b)
}

sum(10,20)
sum(7,3)

function joinText(text1, text2 = "", text3){ // ao colocar o = "" eu defino esse valor como padrão, então text2 sempre será o que eu passar dentro das aspas, se eu não colocar nada será vazio, ele estando vazio, quando eu passar um parametro ele irá aceitar também
  console.log(text1, text2, text3) // a ordem a ser exibida importa
}

joinText("Fulaninho", "Beltrano", "da Silva") // na sequencia que colocar é como será exibido

joinText("Fulanos") // são 3 parametros, se eu colocar só 1 os demais serão exibidos como undefined

function soma(a,b){
  let resultado = a + b
  console.log(resultado) // exibo aqui dentro desse bloco

  return resultado /// se eu quiser chamar essa resposta fora da função, eu coloco o return, porque ai o retorna para quem chamou a função
}

soma(7,3)

let response = sum(7,7) // também posso guardar o valor retornado de sum, em uma variavel
console.log(response)

console.log(sum(5,6)) //dessa forma também consigo exibir o resultado da função


//////////////////////


showMessage("Olá, amigo")

function showMessage(msg){ //// consigo usar essa função antes de ela ter sido declarada
  console.log(msg)
  endLine() //aqui eu chamei o endLine antes de ele ter sido declarado, ele foi declarado na linha debaixo

  function endLine(){ // também consigo chamar uma função dentro de outra função
    console.log("_________________________________________________________")
  }
}

showMessage("Usando antes ou depois, a função era retornar do mesmo jeito")

////////////////////////////

/*
O comentário da documentação JavaScript (sintaxe de JSDoc)
O JSDoc é um padrão para incorporar documentação no código-fonte a partir de comentários
*/

// Abaixo digitar uma barra e dois asteriscos

/**
 * 
 * @param {String} email user email // se tiver asterisco dentro das chaves significa que aceita qualquer coisa
 * @param {String} password more than six characters
 * @returns {Number} user id
 */
function signIn(email, password){
  // Fluxo de autenticação do usuário
  return 7
}

signIn("fulano@email.com", "12345678")


///////////////////////

// Função anônima (função que não possui nome)

const showMessage1 = function(){
  return "Olá!!"
}

console.log(showMessage1) // irá retornar a função toda, e não só a "resposta" dela

console.log(showMessage1()) // ao colocar o () na frente da função, ao executar irá exibir a resposta corretamente

const showMessage2 = function(name){
  return "Olá, " + name
}

console.log(showMessage2("Fulano"))

const showMessage3 = function(message, name){
  return message + name
}

console.log(showMessage3("Olá", "Fulano"))




