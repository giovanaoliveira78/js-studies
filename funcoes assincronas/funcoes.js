// setTimeout() executa uma função após um intervalo de tempo especificado
setTimeout(() => {
  console.log("Olá! Tudo bem?")
}, 2000) // Conta o tempo em milisegundos

// setInterval() executa uma função após um intervalo de tempo especificado

let value = 10
const interval = setInterval(() => {
  console.log(value)
  value--

  if (value === 0) {
    console.log("FELIZ ANO NOVO!!!!!")

    // Interrompe o intervalo de execuções
    clearInterval(interval)
  }
}, 1000) // irá executar a função a cada 1 segundos

// Funções assíncronas 
/*
Quando uma função assíncrona é chamada, ela retorna uma Promise
Quando a função assíncrona retorna um valor, a Promise será resolvida com o valor retornado
Quando a função assíncrona lança uma exceção ou algum valor, a Promise será rejeitada com o valor lançado

Uma função assíncrona pode conter uma expressão de await, que pausa a execução da função assíncrona e espera pela resolução da Promise passada, e depois retoma a execução da função assíncrona e retorna o valor resolvido.
*/

// Promisses 

// Função que retorna uma Promise

function asyncFunction() {
  return new Promise((resolve, reject) => {
    // Simula uma operação assíncrona
    setTimeout(() => {
      const isSuccess = true

      if (isSuccess) {
        resolve("A operação foi concluída com sucesso")
      } else {
        reject("Algo deu errado")
      }
    }, 3000) // Simula uma operação que leva 3 segundos
  })
}

// Visualizando que o retorno é uma promise
//console.log(asyncFunction())


console.log("Executado...")

//const response = asyncFunction()
//console.log(response)

asyncFunction().then((response) => {
  console.log("SUCESSO", response)
})
  .catch((error) => {
    console.log("ERRO", error)
  })
  .finally(() => {
    console.log("FIM")
  })

// Conhecendo async e await 

async function fetch() {
  try {
    const response = await asyncFunction()
    console.log("SUCESSO", response)
    asyncFunction()
    console.log(response)
  } catch (error) {
    console.log("ERRO", error)
  } finally {
    console.log("FIM da execução")
  }
}

fetch()

// Também tem como usar com aron function
/*const fetch = async () => {
  const response = await asyncFunction()
  asyncFunction()
  console.log(response)
}*/

// Event loop
/*
single threaded:
Executa uma coisa por vez

no-blocking:
Não trava o contexto da execução

asynchronous:
Por ser no-blocking precisa utilizar um paradigma assíncrono para lidar com a execução das coisas

concurrent:
As tarefas que executam assincronamente concorrem uma com as outras pelo processamento

Concorrência e Event Loop
O JS possui um modelo de concorrencia baseado em um event loop responsável por gerenciar a execução de código assincrono e eventos em um único thread, permitindo que o JS seja não bloqueante


Call Stack
Armazena as chamadas de funções em execução. Quando uma função é chamada, ela é empilhada no topo da pilha.
Tudo passa pela call stack, algumas tarefas são executadas nela mesma e outras somente passam por ela e será executada e uma web API


WEB API
Utilização de outros recursos

Callback Queue
Fila que armazena callbacks e eventos que aguardam para serem processados

Event Loop
Verifica a pilha de Call Stack e Callback. Se houver, um callback é removido da fila e colocado na pilha de chamadas para execução
Tudo passa pela call stack. Algumas tarefas serão resolvidas nele mesmo e outras somente irá passar pela Call Stck sem fazer nada e será resolvida em alguma WEB API
O Event Loop é quem fica checkando constantemente a call stack e callback queue

Micro e Macro tasks
Microtasks: São tarefas de alta prioridade que são executadas antes das Macrotasks (temporizadores e promises)
Macrotasks: Sao tarefas de menor prioridade, como callbacks de eventos, setTimeout e setInterval

####  RESUMO:  ####
1. Execução de código: O código síncrono é executado de cima para baixo, empilhando e desempilhando funções conforme necessário
2. Eventos assíncronos: Quando ocorrem eventos assíncronos, como uma requisição concluída, o callback correspondente é enfileirado na fila de callback
3. Verificação do Event Loop: O Event Loop verifica a pilha de chamadas e a fila de callback. Se a pilha estiver vazia, ele move um callback da fila de callback para a pilha de chamadas
4. Microtasks: Antes de verificar novamente a fila de callback, o Event Loop executa todas as microtasks pendentes
*/