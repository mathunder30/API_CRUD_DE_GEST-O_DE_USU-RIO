

---

# API de Gestão de Usuários com TypeScript e Node.js

Esta é uma API simples para gerenciar usuários, desenvolvida com **Node.js** e **TypeScript**. Ela permite criar, atualizar, deletar e buscar usuários. A interface de usuário é renderizada usando **EJS** para facilitar a interação.

## Tecnologias Usadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **TypeScript**: Superconjunto de JavaScript para fornecer tipagem estática e recursos modernos.
- **Express.js**: Framework minimalista para criar a API.
- **EJS**: Motor de templates para renderizar páginas HTML dinâmicas.
- **MySQL**: Banco de dados para armazenar as informações dos usuários.

## Funcionalidades

- **Criar Usuário**: Adiciona um novo usuário à base de dados.
- **Atualizar Usuário**: Permite atualizar as informações de um usuário existente.
- **Deletar Usuário**: Remove um usuário da base de dados.
- **Buscar Usuário**: Pesquisa por um usuário com base no ID.

## Como Rodar o Projeto

### Requisitos

- Node.js
- MySQL (ou outro banco de dados compatível)
- Editor de código (recomendado VS Code)

### Passos

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-gestao-usuarios.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd api-gestao-usuarios
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie e configure o banco de dados no MySQL (certifique-se de que o banco de dados está configurado corretamente em `src/config/database.ts`).

5. Rode o servidor:
   ```bash
   npm start
   ```

6. Acesse a API no navegador:
   - A API estará disponível em [http://localhost:5000](http://localhost:5000).
   - O formulário HTML de interação estará em [http://localhost:5000/formulario](http://localhost:5000/formulario).

## Estrutura do Projeto

```
├── src/
│   ├── controllers/       # Contém os controladores para as rotas
│   ├── models/            # Define os modelos de dados e interações com o banco
│   ├── routes/            # Define as rotas da API
│   ├── views/             # Contém as views EJS para renderizar o formulário
│   ├── config/            # Configurações de banco de dados e servidor
│   └── app.ts             # Configuração principal do servidor Express
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

## Contribuições

Sinta-se à vontade para fazer um fork, enviar um pull request ou abrir uma issue com sugestões ou melhorias.

## Licença

Este projeto é licenciado sob a MIT License.

---
