// São blocos de código que a gente cria pra realizar uma tarefa especifica
// A gente cria uma função uma vez e pode chamar ela quantas vezes precisar
// Funções ajudam a deixar o código mais organizado 
// Torna o código mais reutilizável

//Para criar uma função chamamos a palavra reservada function e na frente o nome da função

function message() {
  console.log("Olá! É bom ter você aqui")
} /// só dessa forma a função não é executada

message() // é necessário chamar a função para que ela seja executada
message() // se eu chamar de novo, ela vai executar DE NOVO, e posso chamar quantas vezes eu quiser

/* 
 - Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função.
 - Argumentos: é o valor que é passado para a função
*/

function mensagem(username) { // essa função recebe o parametro username
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

