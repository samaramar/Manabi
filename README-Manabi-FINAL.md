# 🌸 Manabi

> Aplicativo para estudo de japonês com foco inicial em verbos e suas conjugações.

O **Manabi** é uma aplicação desenvolvida com o objetivo de auxiliar no estudo da língua japonesa por meio de exercícios interativos, revisão de verbos, acompanhamento de desempenho e organização do progresso de estudo.

O projeto começou com uma ideia simples: criar uma ferramenta para praticar **verbos japoneses e suas conjugações**.

Com o desenvolvimento, a proposta foi crescendo. O aplicativo passou a contar com diferentes formas de treinamento, configurações personalizadas, busca de verbos, explicações gramaticais, estatísticas de desempenho e um sistema de sequência de estudos.

O Manabi também representa um projeto de aprendizado e evolução em desenvolvimento de software, desde a definição da ideia até a construção do frontend, backend, persistência de dados e organização da arquitetura.

---

## 📚 Sobre o projeto

O Manabi nasceu da vontade de transformar o estudo de japonês em uma experiência mais prática e interativa.

O foco inicial foi trabalhar com verbos porque as conjugações são uma parte importante do aprendizado da língua japonesa e podem exigir bastante repetição para serem assimiladas.

Atualmente, o aplicativo trabalha com três grupos principais de verbos:

- **Godan (五段)**
- **Ichidan (一段)**
- **Irregulares (不規則)**

Cada verbo possui informações como:

- escrita principal;
- hiragana;
- romaji;
- significados;
- grupo gramatical;
- nível JLPT;
- conjugações;
- exemplos de frases;
- estatísticas de treinamento.

O projeto atualmente trabalha com cinco formas de conjugação:

- ます
- て
- た
- ない
- ましょう

---

# 🎯 Objetivos

Os principais objetivos do projeto são:

- facilitar a prática de verbos japoneses;
- incentivar a repetição e revisão;
- permitir diferentes formas de resposta;
- acompanhar o desempenho do estudante;
- mostrar quais conteúdos estão sendo praticados;
- tornar o estudo mais interativo;
- criar uma base que possa futuramente ser expandida para outros conteúdos da língua japonesa.

O projeto também possui um objetivo pessoal importante: **servir como experiência prática de desenvolvimento de software**, permitindo aplicar conhecimentos de desenvolvimento web, arquitetura, organização de código, APIs, persistência de dados e desenvolvimento de interfaces.

---

# ✨ Funcionalidades

## 🏠 Tela inicial

A página inicial apresenta o aplicativo e funciona como ponto de entrada para as principais funcionalidades.

Ela possui:

- identidade visual do Manabi;
- nome em japonês — 学び;
- frase motivacional;
- acesso ao treinamento;
- lista de verbos;
- configurações;
- progresso;
- instruções.

As frases motivacionais também possuem uma pequena lógica para variar de acordo com o dia.

---

## 📝 Treino geral

O treinamento geral permite praticar vários verbos em uma única sessão.

O usuário pode configurar:

- grupos de verbos;
- quantidade de verbos;
- forma gramatical;
- tipo de resposta;
- forma de exibição.

Durante o treinamento, cada resposta é analisada e o sistema informa se está correta ou incorreta.

Uma característica importante do treinamento é a **repetição dos erros**.

Quando o usuário acerta um verbo, ele pode sair da fila.

Quando erra, o verbo retorna para o final da fila para ser praticado novamente.

Isso cria um fluxo de revisão durante a própria sessão.

---

## 🎯 Treino individual

Além do treinamento geral, existe a possibilidade de acessar um verbo específico e iniciar um treinamento somente para ele.

O treinamento individual trabalha as cinco formas disponíveis:

```text
ます
て
た
ない
ましょう
```

Assim, o usuário pode estudar especificamente um verbo que deseja reforçar.

---

## ⚙️ Configurações

O usuário pode personalizar o treinamento.

### Forma gramatical

- ます
- て
- ない
- た
- ましょう

### Grupos

- Godan
- Ichidan
- Irregulares

### Tipo de resposta

- flexível;
- escrita principal;
- hiragana;
- romaji.

### Forma de exibição

- escrita principal + hiragana;
- hiragana + romaji;
- escrita principal + romaji.

### Quantidade

O usuário pode selecionar diferentes quantidades de verbos para a sessão, respeitando a quantidade disponível nos grupos selecionados.

---

# 🔎 Lista de verbos

A lista permite visualizar e pesquisar os verbos cadastrados.

A pesquisa possui diferentes níveis de correspondência:

1. correspondência exata;
2. correspondência parcial;
3. correspondência aproximada.

Também existe uma lógica de similaridade textual para tentar encontrar resultados mesmo quando a pesquisa não corresponde exatamente ao conteúdo cadastrado.

A lista organiza os verbos de acordo com seus grupos gramaticais.

---

# 📖 Detalhes do verbo

Cada verbo possui uma página própria.

Nela são apresentadas informações como:

- escrita;
- hiragana;
- romaji;
- significados;
- grupo;
- JLPT;
- conjugações;
- exemplos de frases;
- estatísticas de treinamento.

A partir dessa tela também é possível iniciar um treinamento específico daquele verbo.

---

# 📊 Progresso

O Manabi possui uma tela dedicada ao acompanhamento do desempenho.

São apresentados:

- total de acertos;
- total de erros;
- aproveitamento geral;
- quantidade de verbos treinados;
- sequência de dias de estudo;
- desempenho por grupo gramatical.

O progresso é calculado pelo backend e apresentado pelo frontend.

Isso mantém a responsabilidade de cálculo separada da responsabilidade de apresentação.

---

# 🔥 Sequência de estudos

O aplicativo registra os dias em que houve estudo.

A sequência é calculada considerando dias consecutivos de estudo.

O sistema evita registrar o mesmo dia mais de uma vez.

O histórico de dias é mantido separadamente das estatísticas dos verbos.

---

# 📚 Instruções

O aplicativo possui uma seção educativa dedicada a explicar conceitos relacionados às conjugações japonesas.

A página apresenta explicações sobre:

- grupos de verbos;
- transformações;
- forma ます;
- forma て;
- forma ない;
- forma た;
- forma ましょう;
- exemplos;
- frases.

A intenção é que o aplicativo não seja apenas um lugar para responder perguntas, mas também ofereça contexto para o estudante entender o conteúdo que está praticando.

---

# 🧠 Como o treinamento funciona

O fluxo geral pode ser representado assim:

```text
Usuário
   │
   ↓
Configurações
   │
   ↓
Treino
   │
   ↓
Backend solicita os verbos
   │
   ↓
Fila de treinamento
   │
   ↓
Usuário responde
   │
   ↓
Validação da resposta
   │
   ├── Correta → remove da fila
   │
   └── Incorreta → retorna para o final da fila
   │
   ↓
Finalização
   │
   ↓
Estatísticas são enviadas ao backend
   │
   ↓
Persistência dos dados
```

---

# 🏗️ Arquitetura

O projeto foi organizado buscando manter as responsabilidades separadas.

O backend possui uma divisão entre:

```text
interface
services
infra
data
```

Essa organização foi influenciada pelo estudo de princípios de separação de responsabilidades e pela preocupação em evitar que toda a lógica ficasse concentrada em um único arquivo.

A intenção não é afirmar que o projeto implementa uma **Clean Architecture completa**, mas que alguns de seus princípios foram utilizados como referência para organizar o código.

A ideia principal é:

> **Cada parte do sistema deve possuir uma responsabilidade bem definida.**

---

# 🖥️ Frontend

O frontend foi desenvolvido utilizando **React** e **Vite**.

Sua responsabilidade principal é:

- apresentar as telas;
- receber interações do usuário;
- controlar estados da interface;
- enviar solicitações para o backend;
- apresentar os dados retornados pela API.

A aplicação utiliza React Router para organizar a navegação entre as páginas.

## Estrutura conceitual

```text
frontend/
└── src/
    ├── assets/
    ├── components/
    ├── context/
    ├── pages/
    ├── utils/
    ├── App.jsx
    └── main.jsx
```

---

# 🧩 Páginas

### `Home`

Tela inicial e navegação principal.

### `Treino`

Responsável pelo treinamento geral com múltiplos verbos.

### `TreinoVerbo`

Responsável pelo treinamento individual.

### `ListaVerbos`

Exibe e pesquisa os verbos cadastrados.

### `DetalhesVerbo`

Apresenta as informações detalhadas de um verbo.

### `Configuracoes`

Permite personalizar o treinamento.

### `Progresso`

Apresenta as estatísticas de estudo.

### `Instrucoes`

Apresenta explicações relacionadas ao aprendizado.

---

# 🌐 Navegação

A aplicação utiliza rotas para conectar as diferentes telas:

```text
/                       → Home
/treino                 → Treino
/configuracoes          → Configurações
/lista                  → Lista de verbos
/verbos/:id             → Detalhes do verbo
/instrucao              → Instruções
/progresso              → Progresso
/treino/verbo/:id       → Treino individual
```

O `App.jsx` funciona como ponto central dessas rotas.

---

# 🧩 Context API

As configurações de treinamento são compartilhadas através do `ConfiguracoesContext`.

O contexto mantém informações como:

- forma gramatical selecionada;
- grupos ativos;
- tipo de resposta;
- modo de exibição;
- quantidade de verbos.

Isso evita que cada página precise manter sua própria cópia dessas configurações.

O contexto também salva as preferências no `localStorage`, permitindo que elas permaneçam disponíveis entre sessões.

---

# 🛠️ Utils

Algumas regras reutilizáveis foram isoladas em utilitários.

## `respostaCorreta.js`

Responsável por:

- determinar respostas aceitas;
- definir como a resposta correta será exibida;
- comparar a resposta do usuário com as respostas aceitas.

O sistema pode aceitar a escrita principal, hiragana, romaji ou diferentes formas dependendo da configuração selecionada.

## `exibicaoVerbo.js`

Centraliza a forma como o verbo é apresentado durante o treinamento.

Isso evita duplicar essa lógica em diferentes páginas.

---

# 🧱 Componentes reutilizáveis

## `Modal`

Utilizado para situações que exigem uma decisão do usuário, como confirmar a saída de um treinamento.

## `Toast`

Utilizado para apresentar mensagens temporárias ao usuário, como notificações de sucesso ou erro.

---

# ⚙️ Backend

O backend foi desenvolvido utilizando **Node.js e Express**.

Sua responsabilidade é fornecer a API que conecta a interface aos dados e às regras relacionadas ao progresso.

De forma simplificada:

```text
Frontend
    ↓
HTTP / API
    ↓
Routes
    ↓
Services / Repositories
    ↓
JSON
```

---

# 🔌 API

As principais rotas disponíveis são:

## Verbos

```http
GET /api/verbs
```

Retorna os verbos cadastrados.

```http
GET /api/verbs/count
```

Retorna a quantidade de verbos por grupo.

```http
GET /api/verbs/:id
```

Retorna um verbo específico.

## Treinamento

```http
GET /api/treino
```

Retorna uma seleção de verbos para treinamento de acordo com os grupos e quantidade solicitados.

## Estatísticas

```http
PATCH /api/verbs/:id/estatisticas
```

Atualiza as estatísticas de um verbo após o treinamento.

## Progresso

```http
GET /api/progresso
```

Retorna as informações de progresso calculadas pelo backend.

## Reset

```http
POST /api/progresso/resetar
```

Reseta as estatísticas dos verbos.

O histórico de dias estudados possui tratamento separado.

---

# 🗄️ Persistência

Uma das decisões importantes do projeto foi utilizar **arquivos JSON como forma de persistência**.

O projeto possui atualmente:

```text
backend/src/data/
├── verbs.json
└── progresso.json
```

O `verbs.json` armazena os dados dos verbos e suas estatísticas.

O `progresso.json` armazena os dias em que houve estudo.

---

# 💡 Por que JSON?

Durante o desenvolvimento, algumas abordagens e bibliotecas foram experimentadas.

Com o avanço do projeto, ficou claro que algumas ferramentas estavam adicionando complexidade sem trazer benefícios proporcionais para o estágio atual da aplicação.

Por isso, foi tomada uma decisão consciente de simplificar a persistência.

Em vez de introduzir uma estrutura de banco de dados apenas por ser uma solução mais tradicional, o projeto utiliza JSON como uma solução adequada ao contexto atual do MVP.

Essa decisão ajudou a manter o foco no desenvolvimento das funcionalidades e na organização das responsabilidades do código.

No futuro, essa camada poderá ser substituída por um banco de dados sem que necessariamente seja preciso alterar toda a aplicação.

---

# 🧠 Seleção de verbos para treinamento

O backend possui uma lógica de prioridade para selecionar os verbos do treinamento.

A prioridade considera fatores como:

- quantidade de vezes que o verbo foi treinado;
- quantidade de acertos;
- quantidade de erros;
- tempo desde o último treinamento.

Verbos com maior necessidade de revisão recebem maior prioridade.

O treinamento também combina essa seleção por prioridade com aleatoriedade, evitando que a sessão fique completamente previsível.

Isso cria um equilíbrio entre:

> **revisar o que precisa ser revisado**

e

> **manter variedade durante o estudo.**

---

# 📈 Estatísticas

Cada verbo possui estatísticas próprias:

```json
{
  "treinado": 0,
  "acertos": 0,
  "erros": 0,
  "ultimaData": null
}
```

Essas informações permitem calcular:

- desempenho;
- quantidade de treinamentos;
- taxa de erro;
- necessidade de revisão;
- desempenho por grupo.

O backend utiliza essas informações para gerar os dados apresentados na tela de progresso.

---

# 🔄 Fluxo completo da aplicação

Um exemplo de fluxo completo:

```text
                 ┌──────────────┐
                 │     Home     │
                 └──────┬───────┘
                        │
             ┌──────────┼───────────┐
             ↓          ↓           ↓
          Treino      Lista      Progresso
             │          │
             │          ↓
             │      Detalhes
             │          │
             │          ↓
             │    Treino individual
             │
             ↓
       Configurações
             │
             ↓
          Backend
             │
      ┌──────┴───────┐
      ↓              ↓
 verbs.json    progresso.json
```

---

# 🔗 Comunicação Frontend ↔ Backend

O frontend realiza requisições HTTP para a API.

### Exemplo: lista de verbos

```text
ListaVerbos
    │
    │ GET /api/verbs
    ↓
Backend
    │
    ↓
verbRepository
    │
    ↓
verbs.json
    │
    ↓
Backend retorna JSON
    │
    ↓
ListaVerbos apresenta os dados
```

### Exemplo: treinamento

```text
Treino
   │
   │ GET /api/treino
   ↓
Backend
   │
   ↓
Seleciona os verbos
   │
   ↓
Retorna a sessão
   │
   ↓
Frontend apresenta o treino
```

### Exemplo: atualização das estatísticas

```text
Treino finalizado
      │
      │ PATCH /api/verbs/:id/estatisticas
      ↓
Backend
      │
      ↓
Atualiza estatísticas
      │
      ↓
verbs.json
```

---

# 📂 Estrutura do projeto

```text
MANABI/
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── css/
│   │   │   ├── Home.jsx
│   │   │   ├── Treino.jsx
│   │   │   ├── TreinoVerbo.jsx
│   │   │   ├── ListaVerbos.jsx
│   │   │   ├── DetalhesVerbo.jsx
│   │   │   ├── Configuracoes.jsx
│   │   │   ├── Progresso.jsx
│   │   │   └── Instrucoes.jsx
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── src/
    │   ├── data/
    │   │   ├── verbs.json
    │   │   └── progresso.json
    │   ├── infra/
    │   │   ├── verbRepository.js
    │   │   └── progressoRepository.js
    │   ├── interface/
    │   │   └── routes.js
    │   ├── services/
    │   │   └── progressService.js
    │   └── server.js
    │
    └── package.json
```

---

# 🛠️ Tecnologias utilizadas

## Frontend

- React
- Vite
- React Router
- Axios
- JavaScript
- HTML
- CSS

## Backend

- Node.js
- Express
- CORS
- JavaScript

## Persistência

- JSON
- localStorage

---

# 🧩 Conceitos utilizados

Durante o desenvolvimento foram aplicados diversos conceitos de desenvolvimento de software.

### Separação de responsabilidades

Diferentes partes do sistema possuem funções diferentes:

```text
Routes
→ comunicação HTTP

Services
→ regras relacionadas ao progresso

Repositories
→ acesso e persistência dos dados

Pages
→ interface e fluxo das telas

Utils
→ lógica reutilizável

Context
→ estado global das configurações
```

### Componentização

O frontend foi dividido em páginas e componentes menores para evitar concentrar toda a aplicação em um único arquivo.

### Reutilização

Regras utilizadas em diferentes lugares foram extraídas para utilitários e componentes reutilizáveis.

### Estado global

As configurações do treinamento são compartilhadas utilizando React Context.

### API REST

Frontend e backend se comunicam através de endpoints HTTP.

### Persistência

O projeto diferencia:

```text
Configurações do usuário
        ↓
   localStorage

Dados dos verbos
        ↓
    verbs.json

Histórico de estudo
        ↓
 progresso.json
```

---

# 🧭 Processo de desenvolvimento e decisões

O desenvolvimento do Manabi foi marcado por experimentação, tentativa e erro e, principalmente, pela revisão das próprias decisões conforme novos problemas apareciam.

Antes da estrutura atual, uma das ideias era permitir que o usuário **adicionasse seus próprios verbos** ao aplicativo.

A proposta era que o usuário digitasse uma palavra e o sistema realizasse um tratamento para tentar identificar informações como:

- se a palavra era um verbo;
- se era de origem japonesa;
- se estava conjugada;
- qual seria sua forma correspondente;
- e como essa informação deveria ser armazenada e apresentada.

Para isso, foram utilizadas bibliotecas voltadas ao tratamento e análise da língua japonesa.

Durante os testes, porém, surgiu um problema importante.

Depois que o usuário digitava uma palavra e ela passava pelo processamento, o resultado apresentado na interface nem sempre correspondia exatamente ao que havia sido digitado ou ao que era esperado.

Em alguns casos, a palavra era transformada e apresentada de uma maneira diferente, gerando **inconsistências entre a entrada do usuário, os dados processados e a informação exibida na tela**.

Foram testadas diferentes formas de tratar essas informações e corrigir essas inconsistências. Entretanto, quanto mais o processamento era ampliado, mais complexa a solução se tornava, sem chegar a um resultado suficientemente confiável para a proposta do aplicativo.

Isso levou a uma decisão importante:

> **Em uma aplicação voltada ao estudo de idiomas, a consistência e a confiabilidade das informações são mais importantes do que permitir uma entrada completamente livre de dados.**

Por isso, a funcionalidade de adicionar verbos foi retirada.

Em seu lugar, foi criada uma base de verbos previamente estruturada, contendo informações organizadas e revisadas, como:

- escrita;
- hiragana;
- romaji;
- significados;
- grupo gramatical;
- nível JLPT;
- conjugações;
- exemplos;
- estatísticas.

Essa mudança também permitiu simplificar o sistema.

Em vez de o aplicativo precisar interpretar e transformar dinamicamente qualquer palavra inserida pelo usuário, ele trabalha com uma estrutura de dados conhecida e consistente.

Isso reduziu a complexidade do processamento e tornou o comportamento do aplicativo mais previsível.

---

# 🧹 Simplificação do projeto

Essa experiência também influenciou outras decisões.

Algumas bibliotecas e abordagens que inicialmente pareciam necessárias acabaram sendo removidas quando ficou claro que estavam introduzindo mais complexidade do que benefício para o estágio atual do Manabi.

A decisão de simplificar não foi tomada apenas para "fazer funcionar", mas para manter o projeto coerente com seu objetivo atual.

O resultado foi uma aplicação menor e mais controlável, em que cada parte possui uma responsabilidade mais clara.

---

# 🧠 Planejamento visual

Outra parte importante do processo de desenvolvimento foi o uso de **mapas mentais, frameworks, fluxos e esquemas desenhados à mão**.

Antes de implementar determinadas funcionalidades, foram utilizadas representações visuais para entender:

- quais partes do sistema precisavam existir;
- como uma funcionalidade deveria funcionar;
- qual caminho uma informação faria dentro da aplicação;
- quais telas precisavam se comunicar;
- onde determinada lógica deveria ficar;
- quais responsabilidades pertenciam ao frontend ou ao backend.

Esse processo ajudou a transformar ideias que inicialmente estavam apenas na cabeça em estruturas mais concretas.

Em vários momentos, **desenhar o fluxo antes de escrever o código ajudou a identificar problemas de organização antes mesmo da implementação**.

Essa prática também contribuiu para a estrutura atual do projeto, em que frontend, backend, páginas, componentes, contexto, serviços e repositories possuem responsabilidades mais bem definidas.

---

# 🤖 Uso de Inteligência Artificial no desenvolvimento

A Inteligência Artificial também fez parte do processo de desenvolvimento do Manabi como uma **ferramenta de apoio para programação, organização e aprendizado**.

A IA foi utilizada em diferentes momentos do projeto, principalmente para:

- auxiliar na organização da estrutura do projeto;
- discutir possíveis soluções para problemas;
- auxiliar na implementação de funcionalidades;
- analisar erros encontrados durante o desenvolvimento;
- revisar trechos de código;
- ajudar a compreender conceitos;
- propor alternativas de implementação;
- auxiliar na criação e organização de fluxos;
- realizar testes e verificar o comportamento das funcionalidades.
- agilizar a implementação do projeto.

Um dos aprendizados mais importantes durante esse processo foi perceber que **trabalhar com Inteligência Artificial em partes menores produzia resultados melhores**.

Em vez de tentar explicar uma funcionalidade inteira de uma vez e solicitar uma implementação completa, o desenvolvimento passou a ser dividido em etapas menores.

O processo passou a seguir uma lógica semelhante a:

```text
Definir uma funcionalidade
        ↓
Planejar o comportamento
        ↓
Implementar uma parte
        ↓
Testar
        ↓
Encontrar problemas
        ↓
Corrigir
        ↓
Testar novamente
        ↓
Avançar para a próxima parte
```

Essa abordagem tornou o desenvolvimento mais controlável e facilitou a identificação da origem dos problemas.

Também ajudou a evitar alterações muito grandes no projeto de uma única vez.

---

## 🧪 Desenvolvimento incremental

A utilização da IA acabou contribuindo para uma forma de desenvolvimento mais **incremental**.

Em vez de tentar construir grandes funcionalidades de uma só vez, cada parte era implementada e testada individualmente.

Por exemplo:

```text
Nova funcionalidade
       ↓
Pequena implementação
       ↓
Teste
       ↓
Funcionou?
   ↙         ↘
Sim          Não
 ↓            ↓
Avançar    Investigar
              ↓
           Corrigir
              ↓
            Testar
```

Essa forma de trabalhar foi especialmente importante porque algumas alterações poderiam afetar funcionalidades que já estavam funcionando.

Ao testar cada etapa antes de continuar, ficou mais fácil perceber quando uma mudança havia causado algum comportamento inesperado.

---

## 🧠 IA como ferramenta de aprendizado

Além de auxiliar diretamente na programação, a Inteligência Artificial também foi utilizada como uma ferramenta para **entender melhor o próprio código**.

Durante o desenvolvimento, a preocupação não era apenas fazer determinada funcionalidade funcionar, mas compreender:

- por que determinada solução funcionava;
- onde determinada lógica deveria ficar;
- como frontend e backend se comunicavam;
- quais responsabilidades pertenciam a cada camada;
- quais partes poderiam ser reutilizadas;
- quando uma solução estava ficando complexa demais.

Esse processo contribuiu para que o desenvolvimento fosse também uma experiência de aprendizado.

A IA funcionou como apoio durante a construção, enquanto as decisões sobre o projeto, os testes e a validação dos resultados continuaram fazendo parte do processo de desenvolvimento.

---

# 📖 Aprendizados

O desenvolvimento do Manabi proporcionou aprendizado em várias áreas:

- desenvolvimento frontend com React;
- criação de APIs;
- comunicação entre frontend e backend;
- gerenciamento de estado;
- React Context;
- React Router;
- persistência de dados;
- organização de repositories;
- separação de responsabilidades;
- criação de regras de negócio;
- tratamento de respostas;
- criação de interfaces;
- organização de componentes;
- experiência do usuário;
- resolução de problemas durante o desenvolvimento.

Além do conhecimento técnico, o projeto mostrou a importância de **entender o problema antes de adicionar uma solução**.

Nem sempre a solução tecnicamente mais sofisticada é a melhor solução para o contexto.

Também foi aprendido que saber trabalhar com Inteligência Artificial é uma habilidade adicional do desenvolvimento: é necessário saber dividir problemas, fornecer contexto, testar resultados, analisar erros e tomar decisões sobre o que realmente deve permanecer no projeto.

---

# 🐛 Erros, desafios e evolução

O projeto também foi construído através de tentativa e erro.

Durante o desenvolvimento surgiram problemas relacionados a:

- organização inicial do código;
- estruturas que posteriormente deixaram de ser utilizadas;
- bibliotecas que não se encaixaram bem na proposta;
- comunicação entre frontend e backend;
- gerenciamento de estado;
- persistência das estatísticas;
- lógica de treinamento;
- manutenção da sequência de estudos;
- organização da interface;
- tratamento das palavras adicionadas pelo usuário.

Esses problemas fizeram parte do processo.

Em vez de esconder essas dificuldades, elas fazem parte da história do projeto porque contribuíram para sua evolução.

Um dos principais aprendizados foi perceber que **refatorar e remover código também fazem parte do desenvolvimento**.

Nem todo código precisa permanecer no projeto apenas porque já foi escrito.

---

# 🎨 Design e experiência

A identidade visual do Manabi foi construída utilizando principalmente tons de:

- verde;
- rosa;
- branco;
- cores complementares para diferenciação de estados e grupos.

A intenção foi criar uma interface que remetesse ao universo japonês sem depender exclusivamente de elementos visuais tradicionais.

A interface também procura diferenciar informações importantes através de cores e organização visual.

---

# 🚧 Status atual

O Manabi encontra-se em estágio de **MVP funcional**.

A estrutura atual já permite:

- estudar verbos;
- realizar treinamentos;
- configurar sessões;
- consultar verbos;
- visualizar conjugações;
- acompanhar desempenho;
- registrar dias de estudo;
- consultar instruções.

A aplicação, porém, continua sendo um projeto em evolução.

---

# 🔮 Próximos passos

O Manabi foi pensado para crescer além do estudo de verbos.

## 📝 Novos tipos de exercícios

Uma das principais evoluções planejadas é adicionar diferentes tipos de exercícios:

- múltipla escolha;
- completar frases;
- associação;
- tradução;
- identificação de conjugação;
- exercícios de leitura;
- exercícios de escuta;
- revisão baseada em dificuldade.

## 📚 Expansão para outros conteúdos

O projeto começou com verbos, mas a intenção é futuramente abordar outros aspectos da língua japonesa:

- partículas;
- adjetivos;
- substantivos;
- estruturas gramaticais;
- formação de frases;
- vocabulário;
- leitura;
- compreensão.

A ideia é transformar gradualmente o Manabi em uma ferramenta mais completa de estudo da língua japonesa.

## 🧠 Sistema de revisão aprimorado

Outra possibilidade é evoluir o sistema atual de prioridade para uma estratégia de revisão ainda mais personalizada.

Isso poderia permitir identificar melhor:

- conteúdos com maior dificuldade;
- conteúdos pouco praticados;
- conteúdos esquecidos;
- frequência ideal de revisão.

## 🗄️ Banco de dados

O JSON atende ao contexto atual do MVP, mas futuramente o projeto poderá migrar para um banco de dados.

A ideia é fazer essa evolução mantendo a separação entre a lógica da aplicação e a camada responsável pela persistência.

## 📱 Aplicativo mobile

Um dos objetivos futuros é disponibilizar o Manabi para dispositivos móveis, incluindo a possibilidade de publicação na **Google Play Store**.

## 🧹 Melhorias de código

Com o crescimento do projeto, também existem planos para:

- refatorar partes do código;
- melhorar a organização;
- aumentar a cobertura de testes;
- aprimorar componentes;
- melhorar acessibilidade;
- melhorar responsividade;
- aprimorar tratamento de erros;
- evoluir a arquitetura conforme novas necessidades surgirem.

A ideia é que a evolução da arquitetura aconteça **conforme o projeto realmente precisar**, evitando complexidade prematura.

---

# 🌱 Visão de futuro

O objetivo não é simplesmente possuir um aplicativo que ensina conjugações.

A ideia é construir uma plataforma de estudo de japonês que possa acompanhar diferentes etapas do aprendizado.

O projeto começou pequeno:

```text
Verbos
  ↓
Conjugações
  ↓
Treinamento
  ↓
Estatísticas
  ↓
Progresso
```

Mas pode evoluir para:

```text
                  MANABI
                     │
       ┌─────────────┼─────────────┐
       ↓             ↓             ↓
    Verbos       Gramática     Vocabulário
       │             │             │
       └─────────────┼─────────────┘
                     ↓
                 Exercícios
                     │
                     ↓
                  Revisão
                     │
                     ↓
                 Progresso
```

A intenção é construir isso de forma gradual, sempre priorizando aquilo que realmente melhora a experiência de estudo.

---

# 💭 Por que Manabi?

O nome **Manabi (学び)** está relacionado à ideia de aprendizado.

O nome representa a proposta do projeto: criar um espaço dedicado ao estudo e à evolução contínua.

Mais do que uma aplicação pronta, o Manabi também representa um processo de aprendizado em desenvolvimento de software.

Cada funcionalidade construída trouxe um novo problema para resolver, uma nova decisão para tomar e uma nova oportunidade de aprender.

---

# ▶️ Como executar

## Pré-requisitos

É necessário ter o **Node.js** instalado.

### Backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor:

```bash
node src/server.js
```

O backend será iniciado na porta:

```text
5000
```

### Frontend

Em outro terminal:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

O Vite disponibilizará a aplicação no endereço indicado pelo terminal.

---

# 🔗 Comunicação local

Durante o desenvolvimento:

```text
Frontend
http://localhost:5173

        ↓

Backend
http://localhost:5000/api
```

---

# 📌 Status e observações

O projeto atualmente está estruturado como um MVP.

Algumas decisões técnicas foram tomadas considerando esse contexto. Soluções mais robustas podem ser introduzidas conforme o projeto crescer e novas necessidades aparecerem.

O objetivo não é adicionar complexidade apenas por adicionar, mas permitir que a arquitetura evolua junto com as necessidades reais da aplicação.

---

# ❤️ Considerações finais

O Manabi começou como uma ideia simples e foi se transformando em um projeto completo de desenvolvimento de software.

Ao longo do processo, foram experimentadas diferentes abordagens, algumas permaneceram e outras foram descartadas.

Mais importante do que chegar rapidamente a uma arquitetura considerada "ideal" foi aprender a tomar decisões de acordo com as necessidades reais do projeto.

O desenvolvimento continua sendo uma oportunidade de aprendizado.

O objetivo é continuar aprimorando o Manabi, adicionar novos conteúdos de japonês, criar novos tipos de exercícios, melhorar a experiência de estudo e, futuramente, disponibilizar o aplicativo para mais pessoas.

🌸 **Manabi — 学び**

> **Aprender é um processo contínuo.**

---

## 👩‍💻 Autora

Desenvolvido como projeto pessoal para aprofundar conhecimentos em desenvolvimento de software e transformar uma ideia própria em uma aplicação funcional.

O Manabi representa não apenas o resultado final, mas também todo o processo de **experimentar, errar, simplificar, aprender e construir**.
