const connection = require('./connection');

const createUser = async (name, email, password) => { // função para criar um novo usuário
  const { insertedId } = await connection().then((db) => db
    .collection('users').insertOne({ name, email, password, role: 'user' }));
  return { name, email, role: 'user', _id: insertedId };
};

const findByEmail = async (email) => { // função que verifica se existe o e-mail do usuário
  const emailUser = await connection().then((db) => db
    .collection('users').findOne({ email }));
  return emailUser;
};

module.exports = {
  createUser,
  findByEmail,
};
