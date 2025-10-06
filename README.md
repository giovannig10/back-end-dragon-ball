# API Dragon Ball - Back-end

Esta é uma API REST construída com Node.js, Express, Prisma e SQLite para gerenciar dados do universo Dragon Ball, incluindo personagens, planetas e raças.

## 📋 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)
- Um editor de código (recomendado: VS Code)

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/giovannig10/back-end-dragon-ball.git
cd back-end-dragon-ball
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example`:

```bash
# Windows (PowerShell)
copy .env.example .env

# Linux/macOS
cp .env.example .env
```

Abra o arquivo `.env` e configure as seguintes variáveis:

```bash
PORT=4001
DATABASE_URL="file:./prisma/dev.db"
```

### 4. Configure o banco de dados

Execute os seguintes comandos para configurar o banco de dados:

```bash
# Gerar o cliente Prisma
npx prisma generate

# Executar as migrações
npx prisma migrate dev

# Popular o banco com dados iniciais
npm run prisma:seed
```

### 5. Inicie o servidor

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:4001`

## 📚 Estrutura do Projeto

```
back-end-dragon-ball/
├── prisma/
│   ├── schema.prisma        # Schema do banco de dados
│   ├── migrations/          # Migrações do banco
│   └── seed/
│       └── seed.js         # Dados iniciais do banco
├── src/
│   ├── server.js           # Arquivo principal do servidor
│   ├── controllers/        # Controladores das rotas
│   ├── models/             # Modelos de dados
│   └── routes/             # Definição das rotas
├── package.json
├── .env.example
└── README.md
```

## 🛠 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Prisma** - ORM para banco de dados
- **SQLite** - Banco de dados
- **CORS** - Middleware para requisições cross-origin
- **Nodemon** - Auto-reload durante desenvolvimento

## 📖 Endpoints da API

### Personagens
- `GET /personagens` - Lista todos os personagens
- `GET /personagens/:id` - Busca personagem por ID
- `POST /personagens` - Cria novo personagem
- `PUT /personagens/:id` - Atualiza personagem
- `DELETE /personagens/:id` - Remove personagem

### Planetas
- `GET /planetas` - Lista todos os planetas
- `GET /planetas/:id` - Busca planeta por ID
- `POST /planetas` - Cria novo planeta
- `PUT /planetas/:id` - Atualiza planeta
- `DELETE /planetas/:id` - Remove planeta

### Raças
- `GET /racas` - Lista todas as raças
- `GET /racas/:id` - Busca raça por ID
- `POST /racas` - Cria nova raça
- `PUT /racas/:id` - Atualiza raça
- `DELETE /racas/:id` - Remove raça

## 🧪 Testando a API

Você pode testar a API usando:

1. **Navegador** - Para requisições GET: `http://localhost:4001/personagens`
2. **Postman/Insomnia** - Para todos os tipos de requisições
3. **cURL** - Exemplo:
   ```bash
   curl http://localhost:4001/personagens
   ```

## 📝 Exemplo de Uso

### Listar todos os personagens:
```bash
GET http://localhost:4001/personagens
```

### Buscar um personagem específico:
```bash
GET http://localhost:4001/personagens/1
```

### Criar um novo personagem:
```bash
POST http://localhost:4001/personagens
Content-Type: application/json

{
  "name": "Gohan",
  "ki": "2000000",
  "racaId": 7,
  "planetaId": 1,
  "tecnicasEspeciais": "Masenko, Kamehameha",
  "transformacoes": "Super Saiyajin",
  "sagas": "Saga Cell, Saga Majin Boo",
  "biografia": "Filho mais velho de Goku",
  "imageUrl": "https://example.com/gohan.jpg"
}
```

## 🔧 Comandos Úteis

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Popular banco de dados
npm run prisma:seed

# Visualizar banco de dados (Prisma Studio)
npx prisma studio

# Reset do banco de dados
npx prisma migrate reset
```

## ❗ Solução de Problemas

### Erro de porta em uso
Se a porta 4001 estiver em uso, altere a variável `PORT` no arquivo `.env` para outra porta disponível.

### Erro no banco de dados
Se houver problemas com o banco:
```bash
npx prisma migrate reset
npm run prisma:seed
```

### Erro de dependências
Reinstale as dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Prisma não funcionando
Se o Prisma não estiver funcionando corretamente:
```bash
npx prisma generate
npx prisma db push
```

## 🗄️ Estrutura do Banco de Dados

O projeto possui 3 tabelas principais:

### Planetas
- `id` - Identificador único
- `name` - Nome do planeta
- `descricao` - Descrição do planeta
- `nivelPoder` - Nível de poder médio
- `imageUrl` - URL da imagem

### Raças
- `id` - Identificador único
- `name` - Nome da raça
- `descricao` - Descrição da raça
- `caracteristicas` - Características da raça
- `habilidadesEspeciais` - Habilidades especiais
- `nivelPoderMedio` - Nível de poder médio
- `planetaId` - Referência ao planeta de origem
- `imageUrl` - URL da imagem

### Personagens
- `id` - Identificador único
- `name` - Nome do personagem
- `ki` - Nível de Ki/poder
- `racaId` - Referência à raça
- `planetaId` - Referência ao planeta
- `tecnicasEspeciais` - Técnicas especiais
- `transformacoes` - Transformações disponíveis
- `sagas` - Sagas em que aparece
- `biografia` - Biografia do personagem
- `imageUrl` - URL da imagem

## 📊 Dados Pré-carregados

O banco vem com dados pré-carregados incluindo:

- **16 Planetas**: Terra, Namekusei, Vegeta, etc.
- **13 Raças**: Saiyajins, Namekuseijins, Androides, etc.
- **50+ Personagens**: Goku, Vegeta, Gohan, Freeza, Cell, etc.

## 👥 Autor

**Giovanni** - Projeto desenvolvido como parte do curso SENAI

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Para qualquer dúvida ou problema, consulte a documentação ou entre em contato.