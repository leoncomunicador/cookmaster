const express = require('express');
const bodyParser = require('body-parser');

const { users, login, recipes } = require('../routes');

const { error } = require('../middlewares/error');

const app = express();
app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/users', users);

app.use('/login', login);

app.use('/recipes', recipes);

app.use(error);

module.exports = app;
