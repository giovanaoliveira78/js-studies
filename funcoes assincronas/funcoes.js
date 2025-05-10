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