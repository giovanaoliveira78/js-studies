/*
Pacotes 

Pacotes (ou bibliotecas) fornecem funcionalidades prontas que você pode reutilizar em seus próprios projetos. Isso economiza tempo e esforço, evitando a necessidade de reescrever funcionalidades.
Você pode acelerar o desenvolvimento, porque não precisa criar tudo do zero. Isso é especialmente útil para tarefas repetitivas ou padrões de programação comuns.

Bons pacotes são mantidas pela comunidade ou por organizações dedicadas. Isso significa que elas são atualizadas para corrigir bugs, melhorar o desempenho e fornecer novos recursos.

Ao usar pacotes, você pode se beneficiar dessas atualizações sem ter que implementá-las você mesmo.
*/

const now = dayjs()
console.log(now.format("DD/MM - HH:mm"))

// Gerenciadores de pacotes
/*
É uma ferramenta que facilita a instação, atualização e gerenciamento de bibliotecas e dependências de um projeto.
O gerenciador de pacotes lida com a resolução de dependências, garantindo que as bibliotecas necessárias estejam disponíveis e em versões compatíveis.
*/

// NPM
/*
NPM (Node Package Manager) é um gerenciador de pacotes popular para JavaScript. Ele permite que desenvolvedores instalem e gerenciem bibliotecas e dependências de um projeto.
*/

// Dependências e Ambientes
/*
Produção:
Inclui as dependências (pacotes/bibliotecas) necessárias para a execução do projeto em um ambiente de produção

Desenvolvimento:
Inclui as dependências que são necessárias apenas durante o desenvolvimento, mas não são necessárias para a execução do aplicativo em produção (por exemplo transpiladores)
*/

// Resolução de dependências
/*
Versionamento semântico:
Padrão de atualizações de versões que oferece um modelo fácil de entender o que mudou em uma versão.

Exemplo 9.1.3 => O primeiro número indica a major version, o segundo indica a minor version e o terceiro indica a patch version

Major (versão principal):
Aumenta quando são feitas alterações incompatíveis. Isso significa que, se você atualizar para uma nova versão principal, pode haver alterações que quebrarão a compatibilidade com versões anteriores.

Minor (versão menor):
Aumenta quando são adicionadas novas funcionalidades de maneira compatível com versões anteriores. As atualizações de versão menor não devem introduzir alterações que quebram a compatibilidade com o código existente

Patch (versão de correção):
Aumenta quando são feitas correções de bugs compatíveis com versões anteriores. Isso significa que essas correções não devem introduzir novas funcionalidades ou quebrar a compatibilidade
*/

// Convenções 
/*
O npm utiliza convenções para gerenciar a resolução de dependências e garantir que as instalações subsequentes mantenham a compatibilidade com as versões utilizadas na aplicação

~ 
O til (~) permite atualizações automáticas para versões compatíveis. Isso permite receber pacthes e correções de bugs.

^
O acento circunflexo (^) indica que o nome pode instalar automaticamente a versão mais recente compatível, mas não a próxima versão incompatível
Isso permite receber pacthes, correções de bugs e pequenas alterações de versão, mas não grandes alterações de versão

@
Quando você usa o @ antes da versão, indica uma versão exata. O npm instalará exatamente a versão especificada
*/