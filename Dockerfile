# Define a imagem base
FROM node:14-alpine

# Cria o diretório da aplicação dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia os arquivos da aplicação
COPY . .

# Compila a aplicação
RUN npm run build

# Define a porta que a aplicação irá escutar
EXPOSE 3000

# Inicia a aplicação
CMD ["npm", "start"]
