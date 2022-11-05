# Bolão Copa

É um widget de feedback que fica no canto inferior direito do site. Esse projeto é uma aplicação que pode ser utilizada em qualquer outro projeto.

![Bolão Copa](./images/web-lp.png)

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

---

## 💻 Como executar

- Clone o repositório
- Entre nas pastas (web / server / mobile) e instale as dependências utilizando `npm install`
  > Não se esqueça de que para o **mobile** e **frontend** funcionar e enviar corretamente o feedback, o **backend** precisa estar rodando.

### 🖥 **Frontend**

- Entre na pasta **web**
- Rode o comando `npm run dev`

### ⚙ **Backend**

- Entre na pasta **server**
- Rode o comando `npm run dev`
- **Prisma:** Rode `npx prisma studio` e será aberto uma interface para navegar nas tabelas do BD;

### 📱 **Mobile**

- Entre na pasta **mobile**
- Rode o comando `npm start` ou `expo start`

---

## 📚 Ferramentas, Bibliotecas e Pacotes

### 🖥 **Frontend**

- **Vite:** é uma ferramenta que converte o código para um formato que todos os browsers entendam, ou seja, permite que o navegador entenda o JS mais moderno.

- **Tailwind CSS:** é uma ferramenta de utilitários css, ou seja, várias classes que adicionam estilos nos elementos.

  - **Post CSS:** integra de forma automatica junto com o VITE para observar os arquivos css da aplicação e recompilar toda vez que houver alguma alteração. E converte o css de uma maneira que o browser precise consumir o arquivo

  - `tailwindcss/forms`: Plugin para formulários, trás algumas estilizações já prontas.
  - `tailwind-scrollbar`: estilizações prontas de scrollbars

- Axios

- **Ícones:** (`phosphor-react`)

- **Headless UI:** (`@headlessui/react`) biblioteca que já contém elementos com **Acessibilidade**.

  > Outras bibliotecas: Reakit/AriaKit, Radix UI, etc.

- **Tirar print da tela (Screenshot):** `html2canvas`

### ⚙ **Backend**

- `ts-node-dev`: pacote integrado com TS, quando houver qualquer alteração em algum arquivo, reinicia o servidor automaticamente (faz o mesmo que o Nodemon)

- **Fastify:** "mini-framework/biblioteca", para trabalhar com a parte http do backend, lidar com rotas.

- **Banco de Dados:**

  - Utilização do SQLite em desenvolvimento e o Postgresql em produção

    > SQLite não precisa instalar nada na máquina, ele salva o BD como um arquivo fixo.

  - [Prisma](https://www.prisma.io/): Prisma é um ORM, ou seja, é uma ferramenta que facilita para trabalhar com operações com banco de dados. É uma forma e abstrar como nos comunicamos com o BD, ou seja, em vez de escrevermos querys SQLs tradicionais, vamos escrever códigos JS e ele irá converter no SQL tradicional.
    > O Prisma suporta múltiplos BD, então se fizer a transição entre esses BD, não precisamos alterar o código

- Diagrama ERD (Entidade de relacionamento)

### 📱 **Mobile**

- **Expo:** SDK com um conjunto de funcionalidades prontas para usar (câmera, vídeo, integrações, etc).

  - Trás várias bibliotecas já pré configuradas.
  - Permite que rodemos o aplicativo direto no dispositivo enquanto estamos desenvolvendo a aplicação (baixar o aplicativo **Expo Go**)

- **Expo Google Fonts:** (`expo-google-fonts`)

  - `expo-app-loading` é para verificar se as aplicações estão carregando as fontes

- **Espaçamento nos Iphones:** `react-native-iphone-x-helper`

- **Gestos:** (`bottom-sheet`)

  - O BottomSheet utiliza mais duas bibliotecas `react-native-reanimated` e `react-native-gesture-handler`

- **Tirar print da tela (Screenshot):** `react-native-view-shot`

- **OAuth Google**:
  - Instalar o `expo-auth-session` e `expo-web-browser`
  - Configurar o OAuth com Google (https://console.cloud.google.com/)
    1. Crie um projeto
    2. API's e serviços > Tela de permissão OAuth
       - Adicionar espocos
    3. API's e serviços > Credenciais > Criar ID do cliente do OAuth

---

## 📚 Extensões do VSCode

- Code Spell Checker
- ESLint
- Tailwind CSS IntelliSense
- Prisma
- Rest Client / Insomnia / Postman
- PostCSS

## ✨ Deploies

- Frontend: [Vercel](https://vercel.com/)
- Backend:
  - [Railway](https://railway.app/)
  - [Heroku](https://www.heroku.com/)
