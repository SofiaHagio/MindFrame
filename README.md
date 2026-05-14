# 🧠👩‍🎓 MindFrame — Modo Estudo

> Ferramenta educacional integrada à câmera do dispositivo que permite ao estudante organizar, buscar e gerenciar fotos tiradas em sala de aula ou dos próprios estudos de qualquer lugar.

---

## Sobre o Projeto

O **Modo Estudo** resolve um problema comum entre estudantes: fotografar conteúdo, seja do quadro ou de anotações pessoais por exemplo, e depois não conseguir encontrá-las. A solução permite organizar as capturas em pastas por matéria, salvar fotos diretamente nelas e ser possível a busca de qualquer imagem por palavra-chave usando reconhecimento de texto (OCR).

### Funcionalidades

- **Pastas por Matéria** — criar e nomear pastas com as disciplinas que desejar, com cores para identificação rápida
- **Câmera Integrada** — fotografar e escolher a pasta de destino em poucos toques, sendo rápido e eficiente
- **Busca por OCR** — busca inteligente que lê o texto dentro das fotos e retorna resultados por palavra-chave
- **Gestão Completa** — renomear, excluir pastas e mover fotos entre elas quando necessário

---

## 💻 Tecnologias Utilizadas

| Tecnologia | Descrição | Categoria |
|---|---|---|
| React Native | Framework mobile para iOS e Android com uma única base de código | Core |
| Expo | Plataforma que simplifica acesso à câmera, arquivos e builds | Platform |
| SQLite | Banco de dados local para armazenar fotos, pastas e textos OCR | Database |
| ML Kit (OCR) | Reconhecimento de texto em imagens, funciona completamente offline | AI/ML |
| Expo FileSystem | Gerenciamento de arquivos de imagem no dispositivo | Storage |
| React Navigation | Navegação fluida entre telas com tabs, stacks e modais | Navigation |
| TypeScript | Tipagem estática para maior segurança e produtividade no código | Language |
| Jest | Testes unitários para garantir qualidade das funcionalidades | Testing |

---

## Estrutura do Repositório

```
MindFrame
├── index.html               # Página principal
├── assets/
│   ├── css/
│   │   └── style.css        # Estilização 
│   ├── js/
│   │   └── script.js        # Lógica interativa (login, slideshow, modais, animações)
│   └── img/
│       ├── carrossel1.png   # Imagens do slideshow (6 no total)
│       ├── ...
│       ├── Lucas.png        # Fotos dos membros do time
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
