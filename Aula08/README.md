# 🎓 ISOAcademy — Plataforma de Cursos em Normas ISO

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v18+-green?logo=node.js" />
  <img src="https://img.shields.io/badge/Express-5.x-black?logo=express" />
  <img src="https://img.shields.io/badge/Handlebars-8.x-orange?logo=handlebarsdotjs" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap" />
  <img src="https://img.shields.io/badge/i18n-PT%20EN%20FR%20ES-blue" />
  <img src="https://img.shields.io/badge/license-ISC-lightgrey" />
</p>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Objetivos](#-objetivos)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [Rotas e Páginas](#-rotas-e-páginas)
- [Sistema de Idiomas (i18n)](#-sistema-de-idiomas-i18n)
- [Dados dos Cursos](#-dados-dos-cursos)
- [Como Executar](#-como-executar)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Screenshots](#-screenshots)

---

## 🏫 Sobre o Projeto

A **ISOAcademy** é uma plataforma web de educação especializada em **Normas Internacionais ISO**, desenvolvida com Node.js, Express e Handlebars como projeto acadêmico da disciplina de Programação WEB (Prof. Tiago, Jan/2025 — Aula 08).

O projeto simula um **e-commerce educacional** completo: catálogo de cursos, carrinho de compras, formulário de proposta corporativa, páginas institucionais, acessibilidade e suporte a múltiplos idiomas.

---

## 🎯 Objetivos

| # | Objetivo |
|---|---|
| 1 | Praticar desenvolvimento fullstack com **Node.js + Express** |
| 2 | Usar **Handlebars** como template engine server-side |
| 3 | Implementar **rotas RESTful** e renderização dinâmica |
| 4 | Aplicar **Bootstrap 5** para layout responsivo |
| 5 | Criar um sistema de **internacionalização (i18n)** client-side + server-side |
| 6 | Exercitar boas práticas de **UI/UX** com CSS customizado e micro-animações |
| 7 | Simular um fluxo de **e-commerce educacional** com carrinho e checkout |

---

## ✨ Funcionalidades

### 🛍️ Catálogo de Cursos
- Exibição de cursos em cards com imagem, título, subtítulo e preço
- Badge **"Mais Vendido"** / **"Best Seller"** para cursos em destaque
- Página de detalhes por curso (`/curso/:id`)
- Filtro de cursos: Home (destaques) vs. Catálogo Completo

### 🏢 Treinamentos In Company
- Catálogo completo de cursos adaptados para formato corporativo
- Grade de diferenciais (Conteúdo Personalizado, Datas Flexíveis, Turmas Exclusivas, Certificação Internacional, Economia em Escala) em grid Bootstrap responsivo
- Formulário de **Solicitação de Proposta** com campos completos

### 🆓 Cursos Gratuitos
- Seção dedicada a cursos introdutórios sem custo
- Badge verde **"GRÁTIS"** em destaque
- CTA para upgrade ao catálogo pago

### 🛒 Carrinho de Compras
- Adição de cursos via query string (`/carrinho?add=iso-9001`)
- Exibição de itens com preço e total calculado
- Simulação de checkout com confirmação

### 🌐 Internacionalização (i18n) — 4 Idiomas
- **🇧🇷 Português** · **🇺🇸 English** · **🇫🇷 Français** · **🇪🇸 Español**
- Traduções **server-side** dos dados dos cursos (nomes, subtítulos, descrições)
- Traduções **client-side** da interface (navbar, botões, footer, hero sections)
- Preferência salva em **cookie HTTP** (persiste entre sessões e páginas)
- Dropdown com bandeirinhas no navbar

### ♿ Acessibilidade
- Botões **A+** / **A-** para aumentar/diminuir o tamanho da fonte
- Modo **Alto Contraste** (☼) com persistência em localStorage
- Atributos `aria-label` em todos os elementos interativos
- HTML semântico com `<nav>`, `<aside>`, `<main>`, `<footer>`, `<article>`

### 📊 Páginas Institucionais
- **Nossos Números** — métricas e KPIs da empresa com animação
- **Depoimentos** — carrossel com avaliações de alunos
- **Cursos em Destaque** — vitrine de cursos selecionados
- **Sobre Nós** — história, missão/visão/valores, equipe e contato em layout two-column com aside rico
- **Login / Cadastro** — formulários de acesso à conta

### 🗂️ Menu Aside Flutuante
- Sidebar fixa à esquerda com atalhos para **Nossos Números** e **Depoimentos**
- Ícones + labels traduzíveis
- Hover com scale e label reveal

---

## 🛠️ Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| **Node.js** | ≥ 18 | Runtime server-side |
| **Express** | 5.x | Framework web / roteamento |
| **express-handlebars** | 8.x | Template engine |
| **cookie-parser** | 1.x | Leitura de cookies para i18n |
| **nodemon** | 3.x | Hot-reload em desenvolvimento |
| **Bootstrap** | 5.3.3 (CDN) | Layout responsivo / componentes |
| **Google Fonts** | Roboto | Tipografia |
| **CSS Custom** | — | Identidade visual, animações, aside, hero |
| **JavaScript Vanilla** | ES2020+ | i18n engine, acessibilidade |

---

## 🏗️ Arquitetura do Projeto

```
┌─────────────────────────────────────────────────────────┐
│                    BROWSER (Cliente)                     │
│  public/js/i18n.js     → Tradução da UI (client-side)  │
│  public/js/main.js     → Acessibilidade, hamburguer     │
│  public/css/style.css  → Estilos customizados           │
└─────────────────────────────────────────────────────────┘
             ↑ req/res via HTTP          ↓ cookie: isoacademy_lang
┌─────────────────────────────────────────────────────────┐
│                EXPRESS SERVER (index.js)                  │
│  cookieParser  → lê cookie de idioma                    │
│  lang middleware → res.locals.lang = 'pt'|'en'|'fr'|'es'│
│  Handlebars engine → helper {{t obj lang}}              │
│  router → routes/index.js                               │
└─────────────────────────────────────────────────────────┘
             ↓ require
┌──────────────────────────┐   ┌──────────────────────────┐
│   data/coursesData.js    │   │ data/cursos_gratuitosData │
│   { nome: {pt,en,fr,es}  │   │ { nome: {pt,en,fr,es}    │
│     desc: {pt,en,fr,es}  │   │   desc: {pt,en,fr,es}    │
│     titulo: {pt,en,fr,es}│   │   titulo: {...} }         │
│     preco, img, id }     │   └──────────────────────────┘
└──────────────────────────┘
             ↓ render
┌─────────────────────────────────────────────────────────┐
│               views/layouts/main.handlebars              │
│  Bootstrap 5 Navbar (sticky) + Language Dropdown        │
│  Side-nav aside (Números / Depoimentos)                 │
│  {{{body}}} → página específica                         │
│  Footer com links rápidos, FAQ, contato, social         │
└─────────────────────────────────────────────────────────┘
```

---

## 🗺️ Rotas e Páginas

| Método | Rota | View | Descrição |
|---|---|---|---|
| `GET` | `/` | `home.handlebars` | Home com cursos em destaque |
| `GET` | `/cursos` | `home.handlebars` | Catálogo completo de cursos |
| `GET` | `/curso/:id` | `product.handlebars` | Detalhes de um curso |
| `GET` | `/cursos_gratuitos` | `cursos_gratuitos.handlebars` | Cursos sem custo |
| `GET` | `/cursos_in_company` | `cursos_in_company.handlebars` | Catálogo In Company + proposta |
| `GET` | `/cursos_em_destaque` | `cursos_em_destaque.handlebars` | Vitrine de destaques |
| `GET` | `/nossos_numeros` | `nossos_numeros.handlebars` | Métricas e KPIs |
| `GET` | `/depoimentos` | `depoimentos.handlebars` | Carrossel de feedbacks |
| `GET` | `/sobre_nos` | `sobre_nos.handlebars` | Institucional + aside rico |
| `GET` | `/carrinho` | `carrinho.handlebars` | Carrinho de compras |
| `GET` | `/login` | `login.handlebars` | Login + cadastro |
| `GET` | `/checkout` | `checkout.handlebars` | Finalização de matrícula |
| `POST` | `/finalizar-compra` | — | Confirmação de compra |

---

## 🌍 Sistema de Idiomas (i18n)

A plataforma suporta **4 idiomas** com uma arquitetura de dois níveis:

### Client-side (`public/js/i18n.js`)
- Dicionários completos com ~80 chaves por idioma
- `data-i18n="key"` nos elementos HTML → `innerHTML` substituído ao trocar idioma
- Handler `applyLang(lang)` salva em `localStorage` + cookie HTTP + recarrega a página

### Server-side (`index.js` + `routes/index.js`)
- Middleware lê o cookie `isoacademy_lang` → expõe `res.locals.lang`
- Helper Handlebars `{{t obj lang}}` → seleciona o campo correto do objeto multilíngue
- Os dados dos cursos têm campos separados por idioma: `{ pt: '...', en: '...', fr: '...', es: '...' }`

```javascript
// Exemplo de dado multilíngue
{
  id: 'iso-9001',
  titulo_completo: {
    pt: 'Sistema de Gestão da Qualidade (SGQ)',
    en: 'Quality Management System (QMS)',
    fr: 'Système de Management de la Qualité (SMQ)',
    es: 'Sistema de Gestión de la Calidad (SGC)'
  }
}

// Uso no template Handlebars
{{t this.titulo_completo ../lang}}
```

---

## 📦 Dados dos Cursos

### `data/coursesData.js` — Cursos Pagos
| ID | Norma | Preço |
|---|---|---|
| `iso-9001` | ISO 9001:2015 — SGQ | R$ 299,90 |
| `iso-14001` | ISO 14001:2015 — SGA | R$ 299,90 |
| `iso-45001` | ISO 45001:2018 — SSO | R$ 349,90 |
| `iso-13485` | ISO 13485:2016 — Médicos | R$ 399,90 |
| `iso-17025` | ISO/IEC 17025:2017 | R$ 450,00 |
| `iso-19011` | ISO 19011:2018 — Auditoria | R$ 250,00 |

### `data/cursos_gratuitosData.js` — Cursos Gratuitos
| ID | Tema |
|---|---|
| `free-nao-conformidades` | Tratamento de Não Conformidades (ISO 9001) |
| `free-auditoria-interna` | Auditoria Interna — Conceitos Básicos (ISO 19011) |

---

## 🚀 Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) v18 ou superior
- npm (incluído no Node.js)

### Passos

```bash
# 1. Clone ou acesse o diretório do projeto
cd "Progr WEB Prof Tiago 05Jan/Aula08"

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
# → Servidor rodando em http://localhost:3000
```

> O projeto usa **nodemon**, então o servidor recarrega automaticamente ao salvar qualquer arquivo.

### Scripts disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `start` | `nodemon ./index.js` | Inicia em modo desenvolvimento |

---

## 📁 Estrutura de Pastas

```
Aula08/
│
├── index.js                    # Entry point: Express, middlewares, helpers
│
├── routes/
│   └── index.js                # Todas as rotas GET/POST
│
├── data/
│   ├── coursesData.js          # 6 cursos ISO com campos multilíngues
│   └── cursos_gratuitosData.js # 2 cursos gratuitos com campos multilíngues
│
├── views/
│   ├── layouts/
│   │   └── main.handlebars     # Layout global: navbar, aside, footer
│   ├── home.handlebars         # Home / catálogo completo
│   ├── product.handlebars      # Detalhes do curso
│   ├── cursos_gratuitos.handlebars
│   ├── cursos_in_company.handlebars
│   ├── cursos_em_destaque.handlebars
│   ├── nossos_numeros.handlebars
│   ├── depoimentos.handlebars
│   ├── sobre_nos.handlebars    # Institucional com aside rico
│   ├── carrinho.handlebars
│   ├── login.handlebars
│   └── checkout.handlebars
│
└── public/
    ├── css/
    │   └── style.css           # Estilos customizados (>700 linhas)
    ├── js/
    │   ├── main.js             # Acessibilidade + init i18n
    │   └── i18n.js             # Engine de tradução + dicionários PT/EN/FR/ES
    └── img/
        └── iso-*-cover.png     # Imagens dos cursos
```

---

## 📸 Screenshots

> Acesse as páginas em `http://localhost:3000` após iniciar o servidor.

| Página | URL |
|---|---|
| Home (Destaques) | `/` |
| Todos os Cursos | `/cursos` |
| In Company | `/cursos_in_company` |
| Cursos Gratuitos | `/cursos_gratuitos` |
| Sobre Nós | `/sobre_nos` |
| Nossos Números | `/nossos_numeros` |
| Depoimentos | `/depoimentos` |
| Carrinho | `/carrinho` |

---

## 👨‍💻 Desenvolvido como projeto acadêmico

**Disciplina:** Programação WEB  
**Professor:** Tiago  
**Edição:** Janeiro 2025 — Aula 08  
**Stack:** Node.js · Express 5 · Handlebars · Bootstrap 5 · Vanilla JS  

---

<p align="center">
  Feito com ❤️ para aprendizado de desenvolvimento web fullstack
</p>
