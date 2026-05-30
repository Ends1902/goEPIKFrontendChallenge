# goEPIKFrontendChallenge
Repositório do desafio de frontend da goEPIK


# 📚 Biblioteca - Frontend

> Interface moderna e responsiva para gerenciamento de biblioteca construída com **React + TypeScript + Vite**

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🎯 Sobre o Projeto

Este é o **frontend** de uma aplicação de gerenciamento de biblioteca. A interface permite que os usuários:
- ✅ Adicionar novos livros (título, autor, ano de publicação)
- 🔍 Buscar livros por título
- 📊 Ordenar livros por ano de publicação
- 🗑️ Remover livros da coleção
- 📱 Acessar via desktop ou mobile

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (v16.0.0 ou superior) - [Download](https://nodejs.org/)
- **npm** (v7.0.0 ou superior) - vem com Node.js

Verifique a instalação com:
```bash
node --version
npm --version
```

## 🚀 Como Rodar o Projeto

### 1️⃣ Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd frontend
```

### 2️⃣ Instalar Dependências

```bash
npm install
```

### 3️⃣ Configurar Variáveis de Ambiente (se necessário)

Crie um arquivo `.env` na raiz do projeto:

```env
# Exemplo de configuração
VITE_API_URL=http://localhost:3000/api
```

### 4️⃣ Rodar em Modo Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em **http://localhost:5173**

## 🏗️ Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Criar build para produção
npm run build

# Visualizar build de produção localmente
npm run preview

# Executar linter (ESLint)
npm run lint
```

## 📁 Estrutura do Projeto

```
frontend/
├── public/                 # Assets estáticos
├── src/
│   ├── components/        # Componentes React reutilizáveis
│   │   ├── BookForm.tsx      # Formulário de cadastro de livros
│   │   ├── BookList.tsx      # Lista de livros
│   │   └── SearchBar.tsx     # Barra de busca
│   ├── services/
│   │   └── BookService.ts    # Serviço de requisições da API
│   ├── types/
│   │   └── Book.ts           # Tipos TypeScript
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   ├── App.css            # Estilos da aplicação
│   └── index.css          # Estilos globais
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Recursos

- **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Tema Moderno** - Paleta de cores azul gradiente profissional
- **Animações Suaves** - Transições e efeitos visuais elegantes
- **TypeScript** - Tipagem estática para maior segurança
- **Vite** - Build tool rápido e moderno

## 🔧 Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 18.x | Biblioteca UI |
| TypeScript | 5.x | Linguagem tipada |
| Vite | 5.x | Build tool |
| Axios | - | Cliente HTTP (se configurado) |

## 📝 Variáveis de Ambiente

Crie um arquivo `.env` na raiz para configurações personalizadas:

```env
# URL da API backend
VITE_API_URL=http://localhost:3000/api

# Ambiente
VITE_ENV=development
```

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📚 Documentação Adicional

- [React Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Vite Docs](https://vitejs.dev/)

## ⚠️ Notas Importantes

- Este é apenas o **frontend** do projeto. Certifique-se de que a **API backend** está rodando antes de usar a aplicação.
- A porta padrão do Vite é `5173`. Se estiver em uso, configure uma porta diferente em `vite.config.ts`.

## 📞 Suporte

Se encontrar problemas:

1. Verifique se todas as dependências foram instaladas (`npm install`)
2. Limpe o cache: `rm -rf node_modules && npm install`
3. Verifique se a API backend está acessível
4. Consulte os logs do navegador (F12 → Console)

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido com ❤️**

