# 🧠👩‍🎓 MindFrame — Modo Estudo

> Ferramenta educacional integrada à câmera do dispositivo que permite ao estudante organizar, buscar e gerenciar fotos tiradas em sala de aula ou dos próprios estudos de qualquer lugar.

---

## Sobre o projeto

O **Modo Estudo** resolve um problema comum entre estudantes: fotografar conteúdo do quadro ou de anotações pessoais e depois não conseguir encontrá-las. Esta página web apresenta o conceito da ferramenta, suas funcionalidades planejadas e o time por trás do projeto.
 
A página foi construída como **site estático** com HTML, CSS e JavaScript puro — sem frameworks ou bibliotecas externas.

### Funcionalidades apresentadas
 
- **Hero com slideshow** — carrossel de 6 imagens exibindo telas da ferramenta
- **Seção de funcionalidades** — visão geral do que a ferramenta oferecerá (pastas por matéria, câmera integrada, busca por OCR e gestão completa)
- **Modal de vídeo** — demonstração do protótipo da ferramenta em vídeo
- **Seção de tecnologias** — stack planejada para o desenvolvimento futuro
- **Seção do time** — apresentação dos integrantes com fotos
- **Login de acesso** — tela de autenticação antes de visualizar o conteúdo
- **Botão de feedback** — coleta de comentários dos visitantes

---

## 💻 Tecnologias utilizadas
 
| Tecnologia | Descrição |
|---|---|
| HTML5 | Estrutura e marcação semântica da página |
| CSS3 | Estilização completa com variáveis, animações e responsividade |
| JavaScript (ES5/ES6) | Toda a lógica interativa, sem frameworks ou bibliotecas externas |

---

## Estrutura do repositório

```
MindFrame
├── index.html               ← Página principal
├── assets/
│   ├── css/
│   │   └── style.css        ← Estilização 
│   ├── js/
│   │   └── script.js        ← Lógica interativa (login, slideshow, modais, animações)
│   └── img/
│       ├── carrossel1.png   ← Imagens do slideshow (6 no total)
│       ├── ...
│       ├── Lucas.png        ← Fotos dos membros do time
│       ├── Tomé.png
│       ├── Caique.png
│       ├── Sabrina.jpg
│       └── Sofia.jpeg
└── README.md
```

---

## Como executar

Por ser uma landing page estática, basta abrir o arquivo diretamente no navegador:

```bash
# Clone o repositório
git clone https://github.com/SofiaHagio/MindFrame.git

# Acesse a pasta
cd MindFrame-main

# Abra no navegador
open index.html
```

> **Login padrão:** usuário `admin` / senha `1234`

## JavaScript — Requisitos Implementados

O arquivo `script.js` foi desenvolvido em **JavaScript puro**, sem frameworks ou bibliotecas externas, cobrindo todos os requisitos da disciplina:

### 1. Manipulação Dinâmica de Elementos e Eventos do DOM
- Navbar que altera seu estilo ao rolar a página (`classList.add("rolado")`)
- Botão de feedback criado em tempo de execução via `document.createElement`
- Enquadramento das fotos do time aplicado via `style.objectPosition` lendo o atributo `data-pos` de cada `<img>`

### 2. Validação de Formulários e Login
- Verificação de campos vazios antes de submeter
- Checagem de credenciais (`admin` / `1234`)
- Exibição de mensagem de erro inline sem recarregar a página
- Limpeza do campo de senha em caso de erro

### 3. Alertas e Prompts
- `prompt()` usado após login para capturar o nome do usuário
- `prompt()` usado no botão de feedback para coletar comentários
- Alerta personalizado exibido dentro da própria página (sem `alert()` nativo)
- Alerta automático disparado ao rolar até a seção do time

### 4. Slideshow de Imagens
- Carrossel com 6 imagens no hero, com efeito de fade (`opacity` 0 → 1)
- Autoplay a cada 5 segundos com `setInterval`
- Botões de navegação manual (anterior e próximo) que pausam o autoplay
- Contador de slides atualizado dinamicamente (`1 / 6`, `2 / 6`, etc.)

### 5. Criação e Gerenciamento de Eventos com o DOM
- Eventos de `click`, `keydown`, `scroll` e `mouseover` / `mouseout`
- Menu hamburguer para mobile com `classList.toggle`
- Modal de vídeo que para o iframe ao fechar (zerando o `src`)
- `IntersectionObserver` para animar cards, passos e membros ao entrar na viewport

---

## Time de Desenvolvimento

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/pgasaabyy">
        <img src="https://avatars.githubusercontent.com/u/178240823?v=4" width="80px;" alt="pgasaabyy"/>
        <br /><sub><b>pgasaabyy</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SofiaHagio">
        <img src="https://avatars.githubusercontent.com/u/229319671?v=4" width="80px;" alt="Julia"/>
        <br /><sub><b>Sofia Hagio</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/KenjiCaique">
        <img src="https://avatars.githubusercontent.com/u/90990678?v=4" width="80px;" alt="Larissa"/>
        <br /><sub><b>KCaique Kenji</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/astorini">
        <img src="https://avatars.githubusercontent.com/u/229319391?v=4" width="80px;" alt="MaviSz01"/>
        <br /><sub><b>Lucas Astorini</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/GTomeN">
        <img src="https://avatars.githubusercontent.com/u/267492078?v=4" width="80px;" alt="Natan"/>
        <br /><sub><b>Guilherme Tomé</b></sub>
      </a>
    </td>
  </tr>
</table>
