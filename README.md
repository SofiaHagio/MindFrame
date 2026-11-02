# MindFrame

O MindFrame é um projeto da FIAP para estudantes que fotografam lousas, slides e anotações e depois têm dificuldade para encontrar esse conteúdo. O site reúne a landing page da solução e o Modo Estudo, uma área para organizar os materiais por matéria.

## Tecnologias

- React
- Vite
- React Router
- axios
- MockAPI
- Tailwind CSS

## Requisitos da Sprint 4

- **React:** landing page integrada ao React; rotas `/`, `/login`, `/modo-estudo` (protegida) e página 404; login com Context (usuário de teste: `admin` / senha: `1234`); hooks customizados na pasta `src/hooks`; feedbacks com axios + MockAPI.
- **Tailwind CSS:** instalado com `@tailwindcss/vite`, com as cores e fontes do projeto no `@theme`.
- **Responsividade:** Desktop, Tablet e Mobile usando os breakpoints `sm`, `md` e `lg`.
- **Deploy:** Git + Vercel. O `vercel.json` faz as rotas funcionarem ao atualizar a página.


## API

As requisições são feitas com axios, configurado em `src/utils/api.js` com a URL base do MockAPI:

```text
https://6ae24423bbb541292299d342.mockapi.io/api/v1
```

O recurso usado é o `feedbacks`:

- `GET /feedbacks`: lista os feedbacks, do mais recente para o mais antigo;
- `POST /feedbacks`: envia um feedback com `nome`, `nota`, `mensagem` e `createdAt`.

Enquanto a lista carrega aparece um indicador de carregamento. Se a API não responder, aparece uma mensagem de erro com o botão "Tentar novamente". Se o envio falhar, o texto digitado continua no formulário para a pessoa tentar de novo.

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

A landing page pode ser vista sem login. Para entrar no Modo Estudo, use:

```text
Usuário: admin
Senha: 1234
```

O acesso fica salvo no navegador até clicar em "Sair", no menu.


## Deploy

https://mindframe-landingpage.vercel.app/

## Repositório

https://github.com/SofiaHagio/MindFrame

## Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio e consulta durante o desenvolvimento do projeto. Na Sprint 4, foi consultada para adaptar os exemplos da apostila (feitos em Next.js) para o Vite com React Router, na separação da lógica em hooks e na integração com a API usando axios. As implementações foram revisadas, testadas e ajustadas pela equipe de acordo com os requisitos da disciplina.

## Integrantes

- Caique Kenji Yafuco — RM 570368
- Guilherme Tomé Nogueira — RM 570144
- Lucas de Andrade Astorini — RM 569119
- Sabrina Lopes da Silva — RM 571870
- Sofia Satomi Hagio — RM 569120
