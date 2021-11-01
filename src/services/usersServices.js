// Faz a ligação entre o model e o controller

const usersModels = require('../models/usersModels');
const { create } = require('../auth/jwtFunctions');

const createUser = async (name, email, password) => {
  const user = await usersModels.createUser(name, email, password);
  return user;
};

const findByEmail = async (email) => {
  const userEmail = await usersModels.findByEmail(email);
  return userEmail;
};

const userLogin = async (email) => { // essa função vai criar o token após ter cadastrado o usuário
  const user = await usersModels.findByEmail(email);
  const token = create(user);
  return token;
};

module.exports = {
  createUser,
  findByEmail,
  userLogin,
};
