# Backend do Guia Botânico — setup e uso

## Pré-requisitos

- **Node.js 18+** — baixar em https://nodejs.org/ (versão LTS)

## Setup inicial (só 1 vez)

Abra um terminal na pasta do projeto e rode, em ordem:

```bash
# 1) Instalar dependências
npm install

# 2) Copiar .env.example → .env e trocar o JWT_SECRET
#    (Windows PowerShell: copy .env.example .env)
cp .env.example .env
# Depois abra o .env e substitua o valor de JWT_SECRET por uma string
# longa e aleatória (mínimo 32 caracteres). Ex:
#   JWT_SECRET=a8f7d9e3-4b2c-1a6d-9f8e-7c3b2a1d5e4f...

# 3) Migrar data.js → data/species.json (fonte de verdade)
npm run migrate

# 4) Criar o usuário admin (vai pedir login e senha no terminal)
npm run create-admin
```

## Rodar o servidor

```bash
npm start
```

Abre em:
- Site público: http://localhost:3000
- Admin: http://localhost:3000/admin.html
- Formulário de contribuição: http://localhost:3000/contribuir.html

Modo dev (reinicia ao salvar código): `npm run dev`

## Fluxo de uso

### Visitantes contribuindo com fotos
1. No site, clicam no botão **"Adicionar foto"** em uma espécie sem imagem
2. São levados para `contribuir.html` com o nome já preenchido
3. Fazem upload da foto + preenchem metadados + enviam
4. A foto fica na pasta `uploads/pending/` e entra na fila de moderação

### Você aprovando
1. Acesse `/admin.html` e faça login
2. Aba **"Submissões pendentes"** mostra a fila
3. Em cada item: botão **Aprovar** ou **Rejeitar**
4. Aprovar → foto é movida para `fotos/`, espécie é atualizada/criada, `data.js` é regenerado automaticamente
5. Rejeitar → foto é apagada

### Cadastro manual e edição
- Aba **"Nova espécie"** — formulário para adicionar sem passar pela fila
- Aba **"Espécies"** — lista todas; clique em "Editar" para alterar ou excluir

## Arquitetura em 1 minuto

```
/
├── server/           ← backend Node (Express)
│   ├── index.js        entry point
│   ├── auth.js         JWT em cookie httpOnly
│   ├── routes/         /api/auth, /api/species, /api/submissions
│   └── utils/          dataFile.js, migrate.js, createAdmin.js
├── data/
│   ├── species.json    fonte de verdade (gerado pela migração)
│   ├── pending.json    fila de submissões
│   └── users.json      usuários com senha hash (bcrypt)
├── uploads/pending/  ← fotos aguardando aprovação
├── fotos/            ← fotos aprovadas (servidas ao site)
├── data.js           ← REGENERADO do species.json a cada alteração
├── index.html        ← site público (inalterado, carrega data.js)
├── admin.html        ← painel administrativo
└── contribuir.html   ← formulário público
```

**Importante:** `data.js` é gerado automaticamente. Não edite à mão — edite em `data/species.json` ou pelo painel.

## Criar mais usuários depois

```bash
npm run create-admin
```

Cada execução adiciona um novo usuário. Todos têm os mesmos poderes (admin).
Para revogar: apagar a linha correspondente em `data/users.json`.

## Deploy no servidor da UFSC (depois)

Passos gerais (assumindo Linux com acesso SSH):

1. **Instalar Node.js 18+** no servidor
2. **Copiar o projeto** (git clone ou rsync)
3. **Setar variáveis de ambiente** — criar `.env` no servidor com:
   - `PORT=80` (ou outra porta liberada)
   - `JWT_SECRET=...` (NOVA string, diferente da local)
   - `NODE_ENV=production`
4. **Rodar**:
   ```bash
   npm install --omit=dev
   npm run migrate   # só na primeira vez
   npm run create-admin
   npm start
   ```
5. **Manter rodando em background** — usar `systemd`, `pm2` ou `tmux`:
   ```bash
   npm install -g pm2
   pm2 start server/index.js --name guia-botanico
   pm2 save
   pm2 startup   # gera comando para iniciar no boot
   ```
6. **HTTPS** — se a UFSC não cuida via reverse proxy (nginx/apache), configure Let's Encrypt. O cookie de sessão exige HTTPS em produção (`NODE_ENV=production`).

## Backup

Só precisa guardar:
- `data/species.json` (espécies)
- `data/users.json` (logins)
- `fotos/` (imagens aprovadas)

O resto (`node_modules`, `uploads/pending`, `data.js`) se reconstrói.

## Problemas comuns

- **"JWT_SECRET não definido"** → faltou criar `.env`.
- **"data/species.json não encontrado"** → rode `npm run migrate`.
- **Login não salva sessão** → provavelmente está usando `file://` direto. Acesse via `http://localhost:3000/admin.html`, não abrindo o arquivo pelo explorador.
- **Upload falha com 413** → arquivo maior que 10MB. Limite está em `server/routes/submissions.js` (`fileSize`).
