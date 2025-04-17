# 🎬 Netflix Clone - Vite + React

Este é um projeto **clone da Netflix** desenvolvido com **React + Vite**, que traz uma experiência rica de navegação por conteúdos de filmes e séries. A aplicação simula diversas funcionalidades do serviço original, incluindo perfis dinâmicos, sistema de busca, navegação por categorias e muito mais.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React**
- ⚡ **Vite**
- 🌀 **Tailwind CSS**
- 🧠 **TMDB API** (The Movie Database)
- 🔐 **React Context API** (para gerenciar perfis)

---

## 📦 Como Rodar o Projeto

### Pré-requisitos

- Node.js (versão recomendada: 18+)
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/netflix-clone.git

# Acesse a pasta do projeto
cd netflix-clone

# Instale as dependências
npm install

# Crie um arquivo .env e adicione sua chave da TMDB API
VITE_TMDB_API_KEY=sua_api_key_aqui
```

# Rode o projeto
npm run dev
Acesse: http://localhost:5173 🚀

# 🧩 Funcionalidades
## 👤 Perfis Dinâmicos
- O usuário pode escolher seu perfil ao entrar na aplicação.

- A foto e nome do perfil são exibidos dinamicamente durante toda a navegação.

- Cada sessão mantém seu próprio contexto de navegação.

## 🧭 Sidebar de Navegação
- Uma sidebar fixa exibe as principais categorias de conteúdo, como:

- Em alta

- Filmes Populares

- Séries Populares

- Mais Bem Avaliados

- Lançamentos

Todas as categorias são funcionais e exibem os conteúdos corretamente.

## 🔍 Barra de Busca
- A barra de busca é totalmente funcional.

- O usuário pode digitar um termo (como "Batman", "Breaking Bad") e ver os resultados em tempo real.

- As buscas são realizadas via API do TMDB, retornando filmes, séries e atores relacionados.

## 🎥 Apresentação de Conteúdo
- Os conteúdos são exibidos em carrosséis horizontais com rolagem.

- Cada card mostra a capa e detalhes do item.

### A página inicial inclui:

- Banner principal com destaque (Hero)

- Diversas seções com listagens diferentes de conteúdo.

- A integração com a API do TMDB permite escalar e adaptar facilmente para novos tipos de conteúdo.

## 📂 Estrutura de Pastas (resumida)

src/<br>
├── api/                # Chamadas à API do TMDB<br>
├── components/         # Componentes reutilizáveis (Navbar, Sidebar, HeroBanner, etc)<br>
├── pages/              # Páginas principais da aplicação<br>
├── assets/             # Imagens e recursos visuais<br>
├── context/            # Gerenciamento de perfil<br>
├── App.jsx             # Componente principal<br>
├── main.jsx            # Ponto de entrada<br>

🧑‍💻 Autor
Feito com ❤️ por Daniel Corte
