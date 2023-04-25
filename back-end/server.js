const route = require('./routes/route');
const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());
app.use(route)
// Rota para autenticar o usuário admin

  app.listen(5000, () => {
    console.log('Server running on port 5000');
  })

