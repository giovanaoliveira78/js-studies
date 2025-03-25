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