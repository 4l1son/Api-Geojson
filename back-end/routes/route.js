const express = require('express');
const route = express.Router();
const user = require('../db/users/user.json');
const data = require('../db/polygons.json');
const fs = require('fs');
const bodyParser = require('body-parser');
route.use(bodyParser.json());

// Rota para login
route.post('/login', (req, res) => {
  const { username, senha } = req.body;

  const users = user.user.find(user => user.username === username && user.senha === senha);
  if (users)
  {
      return res.status(200).json(users);
      
  }

  return res.status(401).json({ message: 'Login invalido' });
});

route.post('/posts', (req, res) => {
  const post = req.body;

  // Lê o arquivo do banco de dados
  const database = JSON.parse(data);

  // Adiciona os novos dados ao banco de dados
  database.push(post);

  // Escreve o banco de dados de volta no arquivo
  fs.writeFileSync('database.json', JSON.stringify(database));

  res.status(201).json({ message: 'Dados inseridos com sucesso' });
});

// Rota GET para retornar todos os dados  
route.get('/dados', (req, res) => {
  res.json(data);
});


module.exports = route;