# API Projeto

Este projeto é uma API que utiliza o Prisma para integrar com o banco de dados MongoDB. A API oferece funcionalidades de autenticação, manipulação de dados e segurança.

## Funcionalidades

- **Integração com MongoDB usando Prisma**
- **Autenticação JWT**
- **Hashing de senhas com Bcrypt**
- **Serviço de backend construído com Express**

## Tecnologias Utilizadas

- [Express](https://expressjs.com/): Framework para construção de APIs em Node.js.
- [Prisma](https://www.prisma.io/): ORM para interagir com o MongoDB.
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js): Para hashing seguro de senhas.
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): Para geração e verificação de tokens JWT.

## Requisitos

- Node.js (versão 16 ou superior)
- MongoDB (local ou MongoDB Atlas)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/api-projeto.git
   cd api-projeto
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o arquivo `.env` com suas credenciais do MongoDB e a chave secreta para JWT:
   ```env
   DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/nomeDoBanco"
   JWT_SECRET="sua-chave-secreta"
   ```

4. Gere o cliente Prisma:
   ```bash
   npx prisma generate
   ```

5. Execute as migrações (caso necessário):
   ```bash
   npx prisma migrate dev
   ```

6. Inicie o servidor:
   ```bash
   npm start
   ```


## Exemplos de Rotas

### Autenticação

- **Registrar Usuário**
  ```http
  POST /cadastro
  ```
  **Body:**
  ```json
  {
    "name": "name",
     "email": "email",
     "password": "password"

  }
  ```

- **Login**
  ```http
  POST /login
  ```
  **Body:**
  ```json
  {
    "email": "email",
    "password": "password"
  }
  ```

### Recursos Protegidos

- **Obter Dados do Usuário**
  ```http
  GET /list
  ```
  **Headers:**
  ```
  Authorization: Bearer <token>
  ```



