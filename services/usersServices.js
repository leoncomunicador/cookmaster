// Faz a ligação entre o model e o controller

const usersModels = require('../models/usersModels');

const createUser = async (name, email, password) => {
  const user = await usersModels.createUser(name, email, password);
  return user;
};

const findByEmail = async (email) => {
  const userEmail = await usersModels.findByEmail(email);
  return userEmail;
};

module.exports = {
  createUser,
  findByEmail,
};
