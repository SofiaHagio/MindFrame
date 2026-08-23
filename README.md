# MindFrame — Modo Estudo

Projeto acadêmico desenvolvido para a disciplina de Web Development do curso de Engenharia de Software da FIAP.

O MindFrame foi pensado para estudantes que costumam fotografar lousas, slides e anotações e depois têm dificuldade para encontrar esse conteúdo. Nesta sprint, o protótipo que antes estava em HTML, CSS e JavaScript foi migrado para React e passou a contar com uma área funcional de organização de materiais.

## Tecnologias utilizadas

- React 19
- Vite 8
- JavaScript
- HTML5
- CSS3
- localStorage

## Funcionalidades

- Login de acesso ao protótipo;
- carrossel com as telas do projeto;
- criação de matérias;
- escolha de cor para cada matéria;
- adição de materiais com tema e imagem opcional;
- busca por matéria, tema, nome do arquivo ou anotação;
- estatísticas do acervo;
- marcação de materiais como favoritos para revisão rápida;
- criação e edição de anotações de texto em cada material;
- histórico de ações;
- exclusão de materiais para a lixeira;
- restauração de materiais excluídos;
- persistência dos dados usando localStorage;
- layout responsivo para computador e celular.

### Novidades da Sprint 3

Nesta sprint foram acrescentadas duas funcionalidades ao Modo Estudo:

**Favoritos:** cada material pode ser marcado ou desmarcado usando o botão de estrela. Os itens marcados também aparecem reunidos na aba "Favoritos", facilitando a revisão de conteúdos considerados importantes antes de uma prova.

**Anotações:** cada material pode receber uma anotação de texto com até 300 caracteres. A anotação pode ser criada, editada ou removida e também passa a fazer parte da busca geral do acervo.

Tanto a informação de favorito quanto as anotações são armazenadas junto aos materiais no `localStorage`, portanto continuam disponíveis mesmo depois de atualizar ou fechar a página no mesmo navegador.

## Componentes React

A aplicação foi dividida em componentes funcionais. A relação pai e filho pode ser observada principalmente neste fluxo:

```text
App
└── ModoEstudo
    ├── Dashboard
    ├── Busca
    ├── NovaMateriaForm
    ├── MateriaCard
    │   ├── AdicionarFotoForm
    │   └── FotoCard
    ├── Favoritos
    │   └── FotoCard
    ├── Historico
    └── Lixeira
```

O componente `App` mantém os principais dados da aplicação e envia informações e funções para os componentes filhos por meio de props. O componente `FotoCard` é reutilizado tanto dentro das matérias quanto na aba de favoritos.

## Uso do localStorage

O localStorage é utilizado para manter os dados mesmo depois que a página é atualizada ou o navegador é fechado.

Dados armazenados:

- `mindframe_usuario`
- `mindframe_materias`
- `mindframe_historico`
- `mindframe_lixeira`

Os campos de favorito e anotação ficam dentro de cada material salvo em `mindframe_materias`.

## Uso de Math

As operações da classe `Math` aparecem em funções reais da aplicação:

- `Math.random()` e `Math.floor()` para auxiliar na criação de identificadores e no sorteio de cores;
- `Math.round()` para arredondar a média de materiais por matéria;
- `Math.max()` para encontrar a quantidade de materiais da maior pasta.

## Requisitos para executar

É necessário ter o Node.js instalado. Para esta versão do Vite, utilize Node.js 20.19 ou superior, ou Node.js 22.12 ou superior.

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/SofiaHagio/MindFrame.git
```

Entre na pasta do projeto:

```bash
cd MindFrame
```

Instale as dependências:

```bash
npm install
```

## Como executar

Depois da instalação, execute:

```bash
npm run dev
```

O terminal mostrará o endereço local da aplicação. Normalmente será algo parecido com:

```text
http://localhost:5173
```

## Gerar versão de produção

```bash
npm run build
```

A pasta `dist` será gerada automaticamente pelo Vite.

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

## Usuário para teste

A tela de login é exibida ao iniciar uma nova sessão do site. O acesso é mantido apenas enquanto a sessão do navegador estiver aberta.

```text
Usuário: admin
Senha: 1234
```

## Deploy

Vercel:

https://mindframe-landingpage.vercel.app/

> O endereço acima é o projeto utilizado pela equipe na Vercel. Após atualizar a branch conectada ao deploy, aguarde a nova publicação antes da entrega final.

## Repositório

GitHub:

https://github.com/SofiaHagio/MindFrame

## Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto, principalmente no processo de migração da estrutura original em HTML, CSS e JavaScript para React. A IA auxiliou na adaptação da organização dos componentes, na utilização de imports e na compreensão da nova estrutura do projeto. As implementações foram revisadas, testadas e ajustadas pela equipe de acordo com os requisitos da disciplina.

## Integrantes

- Caique Kenji Yafuco — RM 570368
- Guilherme Tomé Nogueira — RM 570144
- Lucas de Andrade Astorini — RM 569119
- Sabrina Lopes da Silva — RM 571870
- Sofia Satomi Hagio — RM 569120
