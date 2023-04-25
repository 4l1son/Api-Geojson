# API

A parte de front para rodar acesse a raiz do projeto no terminal e rode os seguintes comandos

docker build -t my-api-app .

docker run -p 3000:3000 my-react-app
<hR>
A parte de back vai ser rodadas com os comandos 

docker build -t my-api_back-app .

docker run -p 3000:3000 my-api_back-app

<hr>

### Scripts caso for rodar localmente

No diretório do seu projeto voce pode rodar 

### `npm start` (Isso para o front)

Iniciara o host.\
 [http://localhost:3000](http://localhost:3000) e gera uma view no seu browser.

### `npm install` 
Que precisara rodar para instalar as seguintes dependencia ou pode adicionar  no arquivo package-lock.json a seguinte estrutura
   <ul>"axios": "^1.3.6",
    "leaflet": "^1.9.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-leaflet": "^4.2.1",
    "react-leaflet-draw": "^0.20.4",
    "react-router-dom": "^6.4.4",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"</ul>

<strong>Para o back fara preciso rodar</strong>  ### npm run dev

E instlar as seguintes dependencia no arquivo package-lock.json
<ul>"body-parser": "^1.20.2",
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "fileupload": "^1.0.0",
        "mongodb": "^5.3.0",
        "mongoose": "^7.0.4",
        "mongose": "^0.0.2-security",
        "node-geocoder": "^4.2.0",
        "router": "1.3.8",
        "session": "^0.1.0"</ul>
